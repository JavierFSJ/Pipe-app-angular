import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.css']
})
export class NoCommonsComponent implements OnInit {

  nombre: string = 'Carlitos';
  genero: string = 'masculino';

  /* Objeto mapa */
  invitacionMap = {
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  /* I18NPLURAL */
  clientes: string[] = [
    'Pedro',
    'Fernando',
  ];

  clientesMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes en espera',
  }

  clienteModel: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    if(this.clienteModel){
      this.clientes.push(this.clienteModel);
    }
    this.clienteModel = "";
  }

  remove(){
    this.clientes.pop();
  }

  persona = {
    nombre: 'Javier',
    edad: 35,
    dir: 'main street',
  }

  //Async Pipe 
  miObservable = interval(1000);

  valorPromise = new Promise ( (resolve , reject) => {
    setTimeout(() => {
      resolve('Tenemos data PROMESA');
    }, 6000);
  })


}
