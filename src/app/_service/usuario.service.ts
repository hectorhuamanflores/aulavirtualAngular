import { Injectable } from '@angular/core';
import { of,Observable} from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Usuario } from '../_model/usuario';

@Injectable()
export class UsuarioService {
  private urlProveedores:string = 'http://localhost:8080/api/proveedores';
  private urlProveedor:string = 'http://localhost:8080/api/proveedor';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor( private http:HttpClient) { }

  getProveedores():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlProveedores);
  }
  create(usuario: Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlProveedor,usuario,{headers:this.httpHeaders});
  }
  getProveedor(id):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlProveedor}/${id}`);
  }
  update(usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlProveedor}/${usuario.idUser}`,usuario,{headers:this.httpHeaders});
  }
  delete(id:number):Observable<Usuario>{
     return this.http.delete<Usuario>(`${this.urlProveedor}/${id}`,{headers:this.httpHeaders});
  }
}
