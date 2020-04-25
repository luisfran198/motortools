import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { cliente } from '../models/model_cliente';
import { isNullOrUndefined } from 'util';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  loginCliente(usuario_cli:string, clave_cli:string):Observable<any>{
    const url_api='/api/login_cliente';
    return this.http.post<cliente>(url_api,
        {usuario_cli:usuario_cli, clave_cli:clave_cli},
        {headers: this.headers}).pipe(map(data=>data));
  }
  setCliente(cliente:cliente):void{
    localStorage.setItem('data_current',JSON.stringify(cliente));
  }

  getToken(){
    return localStorage.getItem('data_current').replace(/["']/g, "");
  }
  getCurrentCliente():cliente{
    let cliente_string = localStorage.getItem("data_current");
    if(!isNullOrUndefined(cliente_string)){
      let cliente: cliente = JSON.parse(cliente_string);
    }else{
      return null;
    }
  }
}
