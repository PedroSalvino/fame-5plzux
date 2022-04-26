import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  logado: Boolean = true;

  constructor(auth: AuthService) {
    auth.logado = this.logado;
  }

  ngOnInit() {}
}
