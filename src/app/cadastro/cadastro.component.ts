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
  opacitySucesso = '0';
  bgSucesso = '';

  displayStyleErro = 'none';
  opacityErro = '0';
  bgErro = '';

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
      this.abrirModalErro();
    }
  }

  loginUsuario() {
    if (
      (this.loginuser == '' && this.passuser == '') ||
      (this.loginuser == undefined && this.passuser == undefined) ||
      (this.loginuser == null && this.passuser == null)
    ) {
      this.abrirModalErro();
    } else {
      this.usuario.login(this.loginuser, this.passuser);
    }
  }

  abrirModalSucesso() {
    this.displayStyleSucesso = 'block';
    this.bgSucesso = '#33333355';
    this.opacitySucesso = '100';
  }
  fecharModalSucesso() {
    this.displayStyleSucesso = 'none';
    this.bgSucesso = '';
    this.opacitySucesso = '0';
  }

  abrirModalErro() {
    this.displayStyleErro = 'block';
    this.bgErro = '#33333355';
    this.opacityErro = '100';
  }
  fecharModalErro() {
    this.displayStyleErro = 'none';
    this.opacityErro = '0';
    this.bgErro = '';
  }
}
