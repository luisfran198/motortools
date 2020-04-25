import { Component, OnInit } from '@angular/core';
import { cliente_registro } from '../../models/model_cliente';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
declare var $: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public cliente : cliente_registro={
    nom_cli: "",
    apepat_cli: "",
    apemat_cli: "",
    dni_cli: "",
    correo_cli: "",
    fec_nacimiento_cli: "",
    licencia_cli: "",
    usuario_cli: "",
    clave_cli: ""
  }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  constructor(protected http:HttpClient) { }

  ngOnInit() {
  }

  register(){
    console.log(this.cliente);
    return this.http.post<cliente_registro>('/api/cliente',this.cliente,{headers: this.headers}).pipe(map(data=>data)).subscribe(data=>{
      console.log(data);
      $("#AlertaRegistroCorrecto").modal('show');
    },error=>{
      console.log(error);
    }
    );
  }

}
