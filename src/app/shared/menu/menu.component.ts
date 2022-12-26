import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  options: MenuItem[] = [];

  constructor() {}

  ngOnInit(): void {
    this.options = [
      {
        label: 'Pipes angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos fecha',
            icon: 'pi pi-align-left',
            routerLink: 'noCommons',
          },
          {
            label: 'Numeros',
            icon: 'pi pi-dollar',
            routerLink: 'numeric',
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'noCommons',
          },
        ]
      },
      {
        label: 'Pipe personalizados',
        icon: 'pi pi-cog',
        routerLink: 'order'
      }
    ];
  }
}
