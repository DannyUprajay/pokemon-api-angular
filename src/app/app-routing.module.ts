import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonFormComponent} from "./pokemon-form/pokemon-form.component";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'create', component: PokemonFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
