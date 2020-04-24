import { Component, OnInit} from '@angular/core';
import { Message1Service } from 'src/app/services/message1.service';
//import * as swal from 'sweetalert';
 
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styles: []
})
 
export class ContactoComponent implements OnInit {
 
  constructor(public _Message1Service: Message1Service) { }
  contactForm(form) {
    console.log(form);
    this._Message1Service.sendMessage(form).subscribe(() => {
    alert("Mensaje Enviado, felicidades!");
    });
    }
  ngOnInit(): void {
  }
 
}
