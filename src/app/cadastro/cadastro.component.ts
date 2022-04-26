import { Component, OnInit } from '@angular/core';
import { AuthService } from './../templates/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  logar() {
    this.auth.logar();
  }
}
