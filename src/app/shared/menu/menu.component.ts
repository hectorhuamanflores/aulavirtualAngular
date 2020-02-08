import { Component, OnInit } from '@angular/core';
import { Menu } from './../../_model/menu';
import { MenuService } from './../../_service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {
  menus: Menu[] = [];
  rol: any;
  user: any;
  nombreUser:any;
  apellidoUser:any;
  constructor(private menuService: MenuService) { }

  ngOnInit() {

    this.menuService.menuCambio.subscribe(data => {
      this.menus = data;
    });
    this.menuService.apellidoUsu.subscribe(data => {
      this.apellidoUser = data;
    });
    this.menuService.rol.subscribe(data => {
      this.rol = data.toUpperCase();
    });
    
   

  }

}
