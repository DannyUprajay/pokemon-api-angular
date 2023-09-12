import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonFormComponent} from "./pokemon-form/pokemon-form.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'create', component: PokemonFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
