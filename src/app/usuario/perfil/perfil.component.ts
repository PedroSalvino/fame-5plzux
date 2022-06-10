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

  id: '';
  nome = '';
  email: '';
  senha: '';
  empresa: '';
  cargo: '';

  atualizarPerfil() {
    if (
      this.nome !== '' &&
      this.email !== '' &&
      this.empresa !== '' &&
      this.cargo !== ''
    ) {
      this.usuarioPut = {
        id: this.usuario.usuarioPicked.id,
        nome: this.nome,
        login: this.email,
        senha: this.senha,
        terminal: {
          id: this.terminal.terminalPicked.id,
          nome: this.terminal.terminalPicked.nome,
          cnpj: this.terminal.terminalPicked.cnpj,
        },
        cargo: {
          id: this.cargoService.cargoPicked.id,
          cargo: this.cargoService.cargoPicked.cargo,
        },
      };

      this.usuario.putUsuario(this.usuarioPut);
    }
  }
}
