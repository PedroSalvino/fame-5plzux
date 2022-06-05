import { Component, OnInit } from '@angular/core';
import { PostUsuario, PutUsuario } from '../../interfaces';
import { CargoService } from '../cargo.service';
import { GlobalService } from '../global.service';
import { TerminalService } from '../terminal.service';
import { UsuarioService } from '../usuario.service';
import { AuthService } from './../templates/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  constructor(
    public auth: AuthService,
    public terminal: TerminalService,
    public globalService: GlobalService,
    public cargo: CargoService,
    public usuario: UsuarioService
  ) {}

  ngOnInit(): void {
    this.terminal.getTerminais();
    this.cargo.getCargos();
  }

  usuarioPost: PostUsuario = {} as PostUsuario;

  iduser: '';
  nomeuser: '';
  emailuser: '';
  senhauser: '';
  empresauser: '';
  cargouser: '';
  //terminal
  idterminal: '';
  nometerminal: '';
  cnpjterminal: '';
  //cargo
  idcargo: '';
  nomecargo: '';

  logar() {
    this.auth.logar();
  }

  getTerminal() {}

  cadastrarUsuario() {
    this.usuarioPost = {
      nome: this.nomeuser,
      email: this.emailuser,
      senha: this.senhauser,
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

    console.log(this.usuarioPost);
  }
}
