import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
//SERVICIOS
import {MenuService}  from "./_service/menu.service";
//HOME

import { MenuComponent } from './shared/menu/menu.component';
import { ContentComponent } from './shared/content/content.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SettingComponent } from './shared/setting/setting.component';
import { DataTablesModule } from 'angular-datatables';
//para usar formularios
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
//para usar con spring
import { HttpClientModule} from "@angular/common/http";
//JWT
import { JwtModule } from '@auth0/angular-jwt';

//LOGIN
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { GuardService } from './login/guard.service';

import { ConfigurarCursoComponent } from './Administrador/configurar.curso/configurar.curso.component';
import { AsignacionRolesComponent } from './Administrador/asignacion.roles/asignacion.roles.component';
import { UsuarioComponent } from './Administrador/usuario/usuario.component';

import { EditarCursoComponent } from './Profesor/editar.curso/editar.curso.component';
import { RegistrarContenidoComponent } from './Profesor/registrar.contenido/registrar.contenido.component';
import { ContestarPreguntasComponent } from './Profesor/contestar.preguntas/contestar.preguntas.component';
import { RegistrarActividadesComponent } from './Profesor/registrar.actividades/registrar.actividades.component';
import { RegistrarCalificacionesComponent } from './Profesor/registrar.calificaciones/registrar.calificaciones.component';

import { AccesoCursoComponent } from './Alumno/acceso.curso/acceso.curso.component';
import { RegistrarPreguntasComponent } from './Alumno/registrar.preguntas/registrar.preguntas.component';
import { RegistrarSugerenciasComponent } from './Alumno/registrar.sugerencias/registrar.sugerencias.component';
import { UsuarioService } from './_service/usuario.service';
import { RolesService } from './_service/roles.service';


export function tokenGetter(){
  let tk = JSON.parse(sessionStorage.getItem(environment.TOKEN_NAME));
  let token = tk != null ? tk.access_token : '';
  return token;
}

const routes: Routes = [
  {path: '',redirectTo: '/login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},

  {path: 'curso-configurar', component: ConfigurarCursoComponent,canActivate: [GuardService]},
  {path: 'asignacion-roles', component: AsignacionRolesComponent,canActivate: [GuardService]},
  {path: 'usuario', component: UsuarioComponent,canActivate: [GuardService]},

  {path: 'curso-editar', component: EditarCursoComponent,canActivate: [GuardService]},
  {path: 'registrar-contenido', component: RegistrarContenidoComponent ,canActivate: [GuardService]},
  {path: 'contestar-preguntas', component: ContestarPreguntasComponent ,canActivate: [GuardService]},
  {path: 'registrar-actividades', component: RegistrarActividadesComponent ,canActivate: [GuardService]},
  {path: 'registrar-calificaciones', component: RegistrarCalificacionesComponent ,canActivate: [GuardService]},

  {path: 'curso-acceso', component: AccesoCursoComponent ,canActivate: [GuardService]},
  {path: 'registrar-preguntas', component: RegistrarPreguntasComponent ,canActivate: [GuardService]},
  {path: 'registrar-sugerencias', component: RegistrarSugerenciasComponent,canActivate: [GuardService]}
  //{path: 'home',component:HomeComponent,canActivate: [GuardService] },
  /*{
    path: 'condonaciones', component: CondonacionesComponent, children: [
      { path: ':cod', component: CondonacionesCreditosComponent },
      { path: ':cod/:cred', component: CondonacionesPagosComponent }
    ], canActivate: [GuardService]
  }*/
  //{path: 'condonaciones',component:CondonacionesComponent,canActivate: [GuardService]},
  //{path: 'condonaciones/:cod',component:CondonacionesCreditosComponent},
  //{path: 'condonaciones/:cod/:cred',component:CondonacionesPagosComponent},
];


@NgModule({
  declarations: [
    AppComponent,
	  MenuComponent,
    ContentComponent,
    FooterComponent,
    HeaderComponent,
    SettingComponent,
    LoginComponent,
    ConfigurarCursoComponent,
    ConfigurarCursoComponent,
    AsignacionRolesComponent,
    UsuarioComponent,
    EditarCursoComponent,
    RegistrarContenidoComponent,
    ContestarPreguntasComponent,
    RegistrarActividadesComponent,
    RegistrarCalificacionesComponent,
    AccesoCursoComponent,
    RegistrarPreguntasComponent,
    RegistrarSugerenciasComponent
  ],
  imports: [
    BrowserModule,
	  HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: ['localhost:8080/login/enviarCorreo']
      }
    })
  ],
  providers: [
    MenuService,
    UsuarioService,
    RolesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
