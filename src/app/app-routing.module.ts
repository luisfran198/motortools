import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";

const routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component:ServiciosComponent },
  { path: '**', pathMatch: 'full', redirectTo:'nosotros'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const app_routing = RouterModule.forRoot(routes);