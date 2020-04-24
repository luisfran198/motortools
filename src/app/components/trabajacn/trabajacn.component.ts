import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
 
@Component({
  selector: 'app-trabajacn',
  templateUrl: './trabajacn.component.html',
  styles: []
})
export class TrabajacnComponent implements OnInit {
 
  constructor(public _MessageService: MessageService) { }
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
    alert("Mensaje Enviado, felicidades!");
    });
    }
  ngOnInit(): void {
  }
 
}