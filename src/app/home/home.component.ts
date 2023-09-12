import {Component, OnInit} from '@angular/core';
import {PokemonInterface, resultPokemon} from "../pokemon.interface";
import {PokemonService} from "../pokemon.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

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

  resultMessageDelete: resultPokemon | undefined
  deletePokemon(id:number, index:number){
    this.pokemonService.deletePokemon(id).subscribe(resultatDelete => {


      this.resultMessageDelete = resultatDelete;
      console.log(this.resultMessageDelete);

      if (this.resultMessageDelete.true !== "No have permission"){
        console.log(index)

        this.pokemons.splice(index,1);
      }

      if (this.resultMessageDelete.true == "No have permission"){

        alert("Tu n'est pas autorisé a faire ça");
      }

      if (this.resultMessageDelete.err){
        console.log("Ya une erreur");
      }


    });





  }
  // selectPokemon(pokemon: PokemonInterface) {
  //     this.pokemonDetail = pokemon;
  // }

}
