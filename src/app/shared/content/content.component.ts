import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../login/login.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})
export class ContentComponent implements OnInit {
  titulo: string;

  constructor(public loginService: LoginService) { }

  ngOnInit() {

  }

}
