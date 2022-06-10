import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostUsuario } from '../../interfaces';
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
    public usuario: UsuarioService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.terminal.getTerminais();
    this.cargo.getCargos();
    this.usuario.getUsuario(55);
  }

  usuarioPost: PostUsuario = {} as PostUsuario;

  iduser: '';
  nomeuser: '';
  emailuser: '';
  senhauser: '';
  empresauser: '';
  cargouser: '';

  loginuser: '';
  passuser: '';

  logar() {
    this.auth.logar();
  }

  getTerminal() {
    let index = parseInt(this.empresauser);
    this.terminal.getTerminal(index);
  }

  getCargo() {
    let index = parseInt(this.cargouser);
    this.cargo.getCargo(index);
  }

  cadastrarUsuario() {
    this.usuarioPost = {
      nome: this.nomeuser,
      login: this.emailuser,
      senha: this.senhauser,
      ativo: true,
      terminal: [
        {
          id: this.terminal.terminalPicked.id,
          nome: this.terminal.terminalPicked.nome,
          cnpj: this.terminal.terminalPicked.cnpj,
        },
      ],
      cargo: {
        id: this.cargo.cargoPicked.id,
        cargo: this.cargo.cargoPicked.cargo,
      },
    };
    console.log(this.usuarioPost);
    this.usuario.postUsuario(this.usuarioPost);
  }

  loginUsuario() {
    console.log(this.usuario.usuarioPicked);
    if (
      this.loginuser == this.usuario.usuarioPicked.login &&
      this.passuser == this.usuario.usuarioPicked.senha
    ) {
      this.usuario.logar();
      this.router.navigate(['/dashboard']);
    }
  }
}
