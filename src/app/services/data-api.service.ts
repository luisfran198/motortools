import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {AuthService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(
    protected http:HttpClient,
    // private IpconfigService:IpconfigService,
    private authService: AuthService
  ) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
    Authorization : this.authService.getToken()
  });
}
