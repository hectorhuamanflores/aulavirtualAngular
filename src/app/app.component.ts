import { LoginService } from './login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'AulaVirtual';

  constructor(public loginService: LoginService) {

  }

  ngOnInit() {
  /*  this.menuService.menuCambio.subscribe(data => {
      this.menus = data;
    });*/
  }
}
