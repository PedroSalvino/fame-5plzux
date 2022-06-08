import { Component, OnInit } from '@angular/core';
import { PutUsuario } from '../../../interfaces';
import { CargoService } from '../../cargo.service';
import { GlobalService } from '../../global.service';
import { ParalisacaoService } from '../../paralisacao.service';
import { TerminalService } from '../../terminal.service';
import { UsuarioService } from '../../usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  constructor(
    public global: GlobalService,
    public usuario: UsuarioService,
    public cargo: CargoService,
    public terminal: TerminalService
  ) {}

  ngOnInit(): void {
    this.cargo.getCargos();
    this.terminal.getTerminais();
  }

  usuarioPut: PutUsuario = {} as PutUsuario;

  id: '';
  nome = '';
  email: '';
  senha: '';
  empresaUser: '';
  cargoUser: '';

  atualizarPerfil() {
    if (
      this.nome !== '' &&
      this.email !== '' &&
      this.empresaUser !== '' &&
      this.cargoUser !== ''
    ) {
      this.usuarioPut = {
        id: parseInt(this.id),
        nome: this.nome,
        email: this.email,
        senha: this.senha,
        terminal: {
          id: this.terminal.terminalPicked.id,
          nome: this.terminal.terminalPicked.nome,
          cnpj: this.terminal.terminalPicked.cnpj,
        },
        cargo: {
          id: this.cargo.cargoPicked.id,
          cargo: this.cargo.cargoPicked.cargo,
        },
      };

      this.usuario.putUsuario(this.usuarioPut);
    }
  }
}
