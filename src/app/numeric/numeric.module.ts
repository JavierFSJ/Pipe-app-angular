import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumerosComponent } from './pages/numeros/numeros.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';
import { FormsModule } from '@angular/forms';
import { UpperPipe } from './pipes/upper.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { ColorPipe } from './pipes/color.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';

@NgModule({
  declarations: [
    UpperPipe,
    VuelaPipe,
    ColorPipe,
    NumerosComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent,
    OrdenarPipe,
  ],
  exports: [
    NumerosComponent,
    NoCommonsComponent,
    BasicsComponent,
    OrderComponent,
  ],
  imports: [CommonModule, PrimeNgModule, FormsModule],
})
export class NumericModule {}
