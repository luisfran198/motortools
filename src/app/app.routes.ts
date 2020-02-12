import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { CoolturaComponent } from "./components/cooltura/cooltura.component";
import { EquipoComponent } from "./components/equipo/equipo.component";
import { HomeComponent } from "./components/home/home.component";




const app_routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component:ServiciosComponent },
  { path: 'cooltura', component: CoolturaComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: '', component: HomeComponent },
 
  { path: '**', pathMatch: 'full', redirectTo:'nosotros'}
];



export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});