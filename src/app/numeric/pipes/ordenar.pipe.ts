import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas,interface';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[] , ordenarPor: string = ''): Heroe[] {
    if(ordenarPor === 'nombre'){
      return heroes.sort( (a,b) => a.nombre > b.nombre ? 1: -1 );
    }
    if(ordenarPor === 'vuela'){
      return heroes.sort( (a,b) => a.vuela > b.vuela ? -1: 1 );
    }
    if(ordenarPor === 'color'){
      return heroes.sort( (a,b) => a.color > b.color ? 1: -1 );
    }
    return heroes;
  }

}
