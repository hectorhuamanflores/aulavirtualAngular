import { MenuService } from './../_service/menu.service';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
//import '../login-animation.js';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: string;
  clave: string;
  mensaje: string = "";
  error: string = "";

  constructor(private loginService: LoginService, private router: Router,private menuService: MenuService) { }

  ngOnInit() {
  }
//Es cuando se use el login-animation.js
/*  ngAfterViewInit() {
    (window as any).initialize();
  }*/

  iniciarSesion() {
    this.loginService.login(this.usuario, this.clave).subscribe(data => {
      console.log('data = '+JSON.stringify(data));
      if (data) {
        const helper = new JwtHelperService();

        let token = JSON.stringify(data);
        sessionStorage.setItem(environment.TOKEN_NAME, token);

        let tk = JSON.parse(sessionStorage.getItem(environment.TOKEN_NAME));
        const decodedToken = helper.decodeToken(tk.access_token);
        //console.log(decodedToken);datoUsuario
        sessionStorage.setItem('usuario_', decodedToken.user_name);
        sessionStorage.setItem('rol_', decodedToken.authorities);

        this.menuService.datoUsuario(decodedToken.user_name).subscribe(data => {
          /*let nombreUser  = data['nombreUser'];
          var nombre = nombreUser.split(',')[0];
          var apellido = nombreUser.split(',')[1];
          sessionStorage.setItem('codCope_', data['codCoperativa']);
          sessionStorage.setItem('codAgencia_', data['codAgencia']);
          sessionStorage.setItem('codCaja_', data['codCaja']);
          sessionStorage.setItem('nombreUser_', nombre);
          sessionStorage.setItem('apellidoUser_', apellido);*/
          //nombreRol = new Subject<String>();
          //usuario = new Subject<String>();
          //this.menuService.
          this.menuService.usuario.next(data['data']['username']);
          this.menuService.rol.next(data['data']['roles'][0]['descripcion']);
          this.menuService.nombreUsu.next(data['data']['cnombre']);
          this.menuService.apellidoUsu.next(data['data']['capellido']);
          //console.log('dataUsuario',data);
          //console.log('dataUsuario',data['data']['roles'][0]['descripcion']);
        });
        this.menuService.listarPorUsuario(decodedToken.user_name).subscribe(data => {
          this.menuService.menuCambio.next(data);
        });
        console.log('decodedToken.authorities='+decodedToken.authorities);
        if(decodedToken.authorities == 'ADMIN'){
          //console.log('CONTADOR redireccionar');
          this.router.navigate(['curso-configurar']);
        }
        if(decodedToken.authorities == 'PROFESOR'){
          //console.log('CONTADOR redireccionar');
          this.router.navigate(['curso-editar']);
        }
        if(decodedToken.authorities == 'ALUMNO'){
          //console.log('CONTADOR redireccionar');
          this.router.navigate(['curso-acceso']);
        }

      }
    });
  }

}
