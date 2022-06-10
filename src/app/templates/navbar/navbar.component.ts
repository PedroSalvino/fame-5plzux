import { Component, OnInit } from '@angular/core';
import { GlobalService } from './../../../../src/app/global.service';
import { UsuarioService } from './../../../../src/app/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public global: GlobalService, public usuario: UsuarioService) {}

  ngOnInit() {}
}
