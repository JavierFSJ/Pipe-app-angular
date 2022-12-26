import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas,interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent {

  ordenarPor: string = '';

  mayusculas: boolean = true;
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    }
  ]


  toggleUpper(){
    if(this.mayusculas){
      this.mayusculas = false;
    }
    else{
      this.mayusculas = true;
    }
  }

  ordenar(ordenar: string){
    console.log(ordenar);
    this.ordenarPor = ordenar;
  }
}
