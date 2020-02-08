import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';
import { MenuService } from './../../_service/menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  apellidoUser:any;
  rol:any;
  codAgencia:any;
  codCaja:any;
  constructor(public loginService: LoginService,private menuService: MenuService) { }

  ngOnInit() {

    this.menuService.apellidoUsu.subscribe(data => {
      this.apellidoUser = data;
    });


      
    this.menuService.rol.subscribe(data => {
      this.rol = data.toUpperCase();
    });
   

    

  }


}
