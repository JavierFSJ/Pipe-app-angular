import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {

  nombreLower: string = 'Javier';
  nombreUpper: string = 'SANCHEZ';
  nombreCompleto: string = 'JAvieR sANcheZ';


  fecha: Date = new Date(); //Dia actual;

  constructor() { }

  ngOnInit(): void {
  }

}
