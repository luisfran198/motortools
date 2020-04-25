import { BrowserModule } from '@angular/platform-browser';
import { NgModule,} from '@angular/core';
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
import { BlogComponent } from './components/blog/blog.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { ContactoComponent } from './components/login/contacto.component';
import { TrabajacnComponent } from './components/trabajacn/trabajacn.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './services/message.service';
import { AnclajeComponent } from './components/anclaje/anclaje.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    ServiciosComponent,
    HomeComponent,
    CoolturaComponent,
    EquipoComponent,
    BlogComponent,
    ClientesComponent,
    ContactoComponent,
    TrabajacnComponent,
    AnclajeComponent,
    RegisterComponent,
    ResetPassComponent,
    LoginComponent,
    UserComponent
    
  ],
  imports: [
  
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    app_routing,
    HttpClientModule,
    FormsModule
    
  ],
  exports: [
    RegisterComponent,
    ResetPassComponent,
    LoginComponent
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
