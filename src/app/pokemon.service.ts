import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PokemonInterface, resultPokemon} from "./pokemon.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Observable<PokemonInterface[]>{
  return this.http.get<PokemonInterface[]>("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll");
  }

  getPokemonById(id: number): Observable<PokemonInterface>{
    return this.http.get<PokemonInterface>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id=' + id);
  }

  deletePokemon(id: number): Observable<resultPokemon>{
    return this.http.get<resultPokemon>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=deletePokemon&userApi=danny&id=' + id);
  }


  addPokemon(pokemon: PokemonInterface): Observable<PokemonInterface>{
    const headers = { 'content-type': 'application/x-www-form-urlencoded'}
    const body=JSON.stringify(pokemon);
    return this.http.post<PokemonInterface>(" http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=createPokemon&userApi=Danny", body,{'headers':headers});
  }


}
