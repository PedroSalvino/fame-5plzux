import { Component, OnInit } from '@angular/core';
import { PutUsuario, Usuario } from '../../../interfaces';
import { CargoService } from '../../cargo.service';
import { GlobalService } from '../../global.service';
import { TerminalService } from '../../terminal.service';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  usuarioPicked: Usuario | null = null;
  usuarioPut: PutUsuario = {} as PutUsuario;

  constructor(
    public global: GlobalService,
    public usuario: UsuarioService,
    public cargoService: CargoService,
    public terminal: TerminalService
  ) {
    this.usuarioPicked = JSON.parse(
      localStorage.getItem('usuarioPicked') || '{}'
    );
    console.log(this.usuarioPicked);
  }

  ngOnInit() {}

  nome = '';
  email: '';
  senha: '';
  empresa: '';
  cargo: '';

  atualizarPerfil() {
    this.usuarioPut = {
      id: this.usuarioPicked.id,
      nome: this.usuarioPicked.nome,
      login: this.usuarioPicked.login,
      senha: this.usuarioPicked.senha,
      terminal: [
        {
          id: this.usuarioPicked.terminal[0].id,
          nome: this.usuarioPicked.terminal[0].nome,
          cnpj: this.usuarioPicked.terminal[0].cnpj,
        },
      ],
      cargo: {
        id: this.usuarioPicked.cargo.id,
        cargo: this.usuarioPicked.cargo.cargo,
      },
    };

    this.usuario.putUsuario(this.usuarioPut);
  }
}
