import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { app_routing } from "./app.routes";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { HomeComponent } from './components/home/home.component';
import { CoolturaComponent } from './components/cooltura/cooltura.component';
import { EquipoComponent } from './components/equipo/equipo.component';



@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    ServiciosComponent,
    HomeComponent,
    CoolturaComponent,
    EquipoComponent
    
  ],
  imports: [
  
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    app_routing
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
