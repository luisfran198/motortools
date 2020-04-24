import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class Message1Service {
 
  constructor(private _http: HttpClient) { 
  }
  sendMessage(body) {
    return this._http.post('https://g4hrz5i36e.execute-api.us-east-1.amazonaws.com/021/contact-us1', body);
  }
}