import { Component, OnInit } from '@angular/core';
import { CargoService } from '../cargo.service';
import { GlobalService } from '../global.service';
import { TerminalService } from '../terminal.service';
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
    public cargo: CargoService
  ) {}

  ngOnInit(): void {
    this.terminal.getTerminais();
    this.cargo.getCargos();
  }

  logar() {
    this.auth.logar();
  }
}
