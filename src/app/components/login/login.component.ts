import { Component, OnInit } from '@angular/core';
// services 
import {AuthService} from 'src/app/services/auth.service';
import { cliente } from '../../models/model_cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public cliente : cliente={
    usuario_cli:"",
    clave_cli:""
  }

  constructor(private authService:AuthService) { }
  ngOnInit() {
  }
  login(){
    console.log(this.cliente);
    return this.authService.loginCliente(this.cliente.usuario_cli,this.cliente.clave_cli).subscribe(data=>{
      var decode = data;
      this.authService.setCliente(decode);
      console.log(data);
    },error=>{
      console.log(error);
    });
  }
}
