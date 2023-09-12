import { Component } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.css']
})
export class PokemonFormComponent {

  constructor(private service: PokemonService) {
  }

  onSubmit(form: NgForm){
    this.service.addPokemon(form.value).subscribe(reponse =>{
      console.log(reponse);
    })
  }

}
