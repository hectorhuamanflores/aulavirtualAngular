import { Injectable } from '@angular/core';
import { of,Observable,Subject} from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from './../_model/menu';

@Injectable()
export class MenuService {

  menuCambio = new Subject<Menu[]>();

  usuario = new Subject<String>();
  rol = new Subject<String>();
  nombreUsu = new Subject<String>();
  apellidoUsu = new Subject<String>();
  codAgencia = new Subject<number>();
  codCaja = new Subject<number>();
  

  url: string = `${environment.HOST_URL}`;

  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});


  constructor( private http:HttpClient) { }

  listar(){
    let access_token = JSON.parse(sessionStorage.getItem(environment.TOKEN_NAME)).access_token;
    return this.http.get<Menu[]>(`${this.url}/menus`, {
      headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json')
    });
  }

  listarPorUsuario(nombre: string) {
    let access_token = JSON.parse(sessionStorage.getItem(environment.TOKEN_NAME)).access_token;
    return this.http.post<Menu[]>(`${this.url}/menus/usuario`, nombre, {
      headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json')
    });
  }

  datoUsuario(codUsuario: string){
    let access_token = JSON.parse(sessionStorage.getItem(environment.TOKEN_NAME)).access_token;
    return this.http.get<[]>(`${this.url}/usuarios/datos/`+codUsuario,{
      headers: new HttpHeaders().set('Authorization', `bearer ${access_token}`).set('Content-Type', 'application/json')
    });
  }



}
