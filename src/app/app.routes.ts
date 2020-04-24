import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from "./components/nosotros/nosotros.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { CoolturaComponent } from "./components/cooltura/cooltura.component";
import { EquipoComponent } from "./components/equipo/equipo.component";
import { BlogComponent } from "./components/blog/blog.component";
import { ClientesComponent } from "./components/clientes/clientes.component";
import { TrabajacnComponent } from "./components/trabajacn/trabajacn.component";
import { ContactoComponent } from "./components/login/contacto.component";
import { HomeComponent } from "./components/home/home.component";
import { AnclajeComponent } from "./components/anclaje/anclaje.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ResetPassComponent } from "./components/reset-pass/reset-pass.component";

const app_routes: Routes = [
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'servicios', component:ServiciosComponent },
  { path: 'cooltura', component: CoolturaComponent },
  { path: 'equipo', component: EquipoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'trabajacn', component: TrabajacnComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'anclaje', component: AnclajeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'resetpass', component: ResetPassComponent},
 
  { path: '', pathMatch: 'full', redirectTo:'home'}
];




 
export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
