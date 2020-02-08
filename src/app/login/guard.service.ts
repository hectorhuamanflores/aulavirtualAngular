import { Menu } from './../_model/menu';
import { MenuService } from './../_service/menu.service';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private router: Router, private loginService: LoginService,private menuService: MenuService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
     const helper = new JwtHelperService();
     let rpta = this.loginService.estaLogeado();

    if (!rpta) {
      sessionStorage.clear();
      this.router.navigate(['login']);
      return false;
    } else {
      let token = JSON.parse(sessionStorage.getItem(environment.TOKEN_NAME));

      //si no esta expirado
      if (!helper.isTokenExpired(token.access_token)) {

        // /consulta
        // compare si /consulta puede ser accededido por el rol ADMIN
        const decodedToken = helper.decodeToken(token.access_token);
        let url = state.url;
        console.log(url);
        return this.menuService.listarPorUsuario(decodedToken.user_name).pipe(map((data: Menu[]) => {
          console.log('data',data);
          console.log('url',url);
          this.menuService.menuCambio.next(data);
          this.menuService.datoUsuario(decodedToken.user_name).subscribe(data => {

            this.menuService.usuario.next(data['data']['username']);
            this.menuService.rol.next(data['data']['roles'][0]['descripcion']);
            this.menuService.nombreUsu.next(data['data']['cnombre']);
            this.menuService.apellidoUsu.next(data['data']['capellido']);

          });
          let cont = 0;
          for (let m of data) {
            if (m.url === url) {
              cont++;
              break;
            }
          }
          console.log('cont ='+cont);
          if (cont > 0) {
            return true;
          } else {
            this.router.navigate(['not-401']);
            return false;
          }
        }));

      } else {
        //si el token ya expiro
        sessionStorage.clear();
        this.router.navigate(['login']);
        return false;
      }
    }

  }


}
