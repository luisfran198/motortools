import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  correo_cli: string;
  usuario_cli: string;
  clave_cli: string;

  constructor() { }

  register(){
    console.log(this.correo_cli);
    console.log(this.usuario_cli);
    console.log(this.clave_cli);
  }

  ngOnInit(): void {
  }

}
