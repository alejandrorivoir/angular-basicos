import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'Contador App';
  numero:number = 10;

  base:number = 5;
  
  acumular(valor:number){
    this.numero += valor;
  }
}
