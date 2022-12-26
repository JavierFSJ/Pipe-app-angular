import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent implements OnInit {

  ventasNeta: number = 3928454.554343;
  porcentaje: number = 0.4565;

  constructor() { }

  ngOnInit(): void {
  }

}
