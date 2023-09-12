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

    url = 'http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=createPokemon&userApi=Danny';

    pokemons: PokemonInterface[] = [];
    pokemonDetail: PokemonInterface | undefined;
    pokemon: PokemonInterface | undefined;

    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit() {
        this.pokemonService.getPokemon().subscribe(pokemonTranslate => {
            this.pokemons = pokemonTranslate;
            console.log(this.pokemons);
        })
    }

    viewOnePokemon(id: number){
    this.pokemonService.getPokemonById(id).subscribe(pokemonResult => {
        this.pokemonDetail = pokemonResult;
    });
    }

    public form: FormGroup = new FormGroup({
        name: new FormControl(''),
        picture: new FormControl(''),
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

    deletePokemon(id: number, index: number){
    this.pokemonService.deletePokemon(id).subscribe(resultDelete => {
        if( resultDelete )
        this.pokemons.splice(id,1);
})
    }

    // selectPokemon(pokemon: PokemonInterface) {
    //     this.pokemonDetail = pokemon;
    // }

    // postPokemon(){
    //     this.pokemon = this.form.value;
    //     this.pokemonService.postPokemon(this.pokemon).subscribe((response : any)=>{
    //         console.log(response);
    //     })
    // }
}


