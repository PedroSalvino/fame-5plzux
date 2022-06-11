import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../interfaces';
import { GlobalService } from '../../global.service';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    public globalService: GlobalService,
    public usuario: UsuarioService
  ) {
    this.usuario.getUsuarios();
    this.usuarios = this.usuario.usuarios;
  }

  ngOnInit(): void {}

  getUsuarios() {}
}
