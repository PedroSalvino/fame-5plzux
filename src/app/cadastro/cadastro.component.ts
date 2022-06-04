import { Component, OnInit } from '@angular/core';
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
    public terminalService: TerminalService,
    public globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.terminalService.getTerminais();
  }

  logar() {
    this.auth.logar();
  }
}
