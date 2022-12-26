import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/ventas,interface';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {
  transform(value: number, ...args: any[]): string {
    if(value === Color.azul){
      return 'azul'
    }
    if(value === Color.negro){
      return 'negro'
    }
    if(value === Color.rojo){
      return 'rojo'
    }
    return 'verde'
  }
}