import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class MessageService {
 
  constructor(private _http: HttpClient) { 
  }
  sendMessage(body) {
    return this._http.post(' https://8v1j8vqr2a.execute-api.us-east-1.amazonaws.com/02/contact-us', body);
    }
}