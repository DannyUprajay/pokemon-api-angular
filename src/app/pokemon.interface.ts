export interface PokemonInterface {
  id: number,
  hp: number,
  cp: number,
  name: string,
  picture: string,
  types: string,
  created: string
}

export interface resultPokemon{
 true:string | undefined
 err: string | undefined
 userApi: string | undefined



}


/*

[
{
"id":"2",
"hp":"28",
"cp":"6",
"name":"Salam\u00e8che",
"picture":"https:\/\/assets.pokemon.com\/assets\/cms2\/img\/pokedex\/detail\/004.png",
"types":"Feu",
"created":"2023-09-04 13:49:02"
},

{
"id":"3",
"hp":"21",
"cp":"4",
"name":"Carapuce",
"picture":"https:\/\/assets.pokemon.com\/assets\/cms2\/img\/pokedex\/detail\/007.png",
"types":"Eau",
"created":"2023-09-04 14:28:52"
}

]
 */
