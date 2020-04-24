import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor() { }

  login(){
    console.log(this.username);
    console.log(this.password);
  }
  ngOnInit(): void {
  }

}
