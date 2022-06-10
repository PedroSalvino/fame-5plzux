import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostUsuario } from '../../interfaces';
import { CargoService } from '../cargo.service';
import { GlobalService } from '../global.service';
import { TerminalService } from '../terminal.service';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  constructor(
    public terminal: TerminalService,
    public globalService: GlobalService,
    public cargo: CargoService,
    public usuario: UsuarioService,
    public router: Router
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

  loginuser: '';
  passuser: '';

  displayStyleSucesso = 'none';
  displayStyleErro = 'none';

  getTerminal() {
    let index = parseInt(this.empresauser);
    this.terminal.getTerminal(index);
  }

  getCargo() {
    let index = parseInt(this.cargouser);
    this.cargo.getCargo(index);
  }

  cadastrarUsuario() {
    if (
      this.nomeuser != '' &&
      this.emailuser != '' &&
      this.senhauser != '' &&
      this.empresauser != '' &&
      this.cargouser != '' &&
      this.nomeuser != undefined &&
      this.emailuser != undefined &&
      this.senhauser != undefined &&
      this.empresauser != undefined &&
      this.cargouser != undefined
    ) {
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

      this.usuario.postUsuario(this.usuarioPost);
    } else {
      console.error();
    }
  }

  loginUsuario() {
    console.log(this.usuario.usuarioPicked);
    if (this.loginuser != '' && this.passuser != '') {
      this.usuario.login(this.loginuser, this.passuser);
    }
  }

  abrirModalSucesso() {
    this.displayStyleSucesso = 'block';
  }
  fecharModalSucesso() {
    this.displayStyleSucesso = 'none';
  }

  abrirModalErro() {
    this.displayStyleErro = 'block';
  }
  fecharModalErro() {
    this.displayStyleErro = 'none';
  }
}
