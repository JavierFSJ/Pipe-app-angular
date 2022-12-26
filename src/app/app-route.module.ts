import { BasicsComponent } from './numeric/pages/basics/basics.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { NumerosComponent } from './numeric/pages/numeros/numeros.component';
import { NoCommonsComponent } from './numeric/pages/no-commons/no-commons.component';
import { OrderComponent } from './numeric/pages/order/order.component';

/* Creacion de rutas */

const routes: Routes = [
  { path : '' , component: BasicsComponent , pathMatch:'full'},
  { path : 'numeric' , component: NumerosComponent , pathMatch:'full'},
  { path : 'noCommons' , component: NoCommonsComponent , pathMatch:'full'},
  { path : 'order' , component: OrderComponent , pathMatch:'full'},
  { path : '**' , redirectTo: '' }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRouteModule { }
