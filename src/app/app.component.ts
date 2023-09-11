import {Component, OnInit} from '@angular/core';
import {PokemonService} from "./pokemon.service";
import {PokemonInterface} from "./pokemon.interface";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    url = 'http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll';

    pokemons: PokemonInterface[] | undefined;
    pokemonDetail: PokemonInterface | undefined;

    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit() {
        this.pokemonService.getPokemon().subscribe(pokemonTranslate => {
            this.pokemons = pokemonTranslate;
            console.log(this.pokemons);
        })
    }

    public form: FormGroup = new FormGroup({
        name: new FormControl(''),
        picture: new FormControl(''),
        id: new FormControl(''),
        hp: new FormControl(''),
        cp: new FormControl(''),
        types: new FormControl(''),
        created: new FormControl(''),
    });

    onSubmit() {
        let addPok = {
            'id': 0,
            'name': '',
            'hp': '',
            'cp': '',
            'picture': '',
            'types': '',
            'created': Date()
        };
        if (this.form.valid) {
            addPok = {
                'id': this.form.value.id,
                'name': this.form.value.name,
                'picture': this.form.value.picture,
                'hp': this.form.value.hp,
                'cp': this.form.value.cp,
                'types': this.form.value.types,
                'created': Date(),

            };
            // @ts-ignore
            this.pokemons.push(addPok);

        } else {
            console.log('nono');
        }
    }

    // deleteTask(id: number) {
    //     let task = this.service.fetchById(id -1);
    //     console.log(task + " task");
    //     let index = TACHE.indexOf(task);
    //     console.log(index + " index")
    //     TACHE.splice(index,1);
    // }

    delete(pokemon: PokemonInterface){
        let id: any= pokemon.id;
        let index: any = this.pokemons?.indexOf( pokemon);
        console.log(this.pokemons?.indexOf(pokemon));
        console.log(index + 'index');
        this.pokemons?.splice(index , 1)
        console.log(id);

    }

    selectPokemon(pokemon: PokemonInterface) {
        this.pokemonDetail = pokemon;

        console.log(this.pokemonDetail);
    }

}

