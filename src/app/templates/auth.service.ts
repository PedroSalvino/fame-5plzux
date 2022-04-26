import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  logado: boolean = false;

  constructor() {}

  logar() {
    this.logado = true;
  }

  logout() {
    this.logado = false;
  }

  getLogado() {
    return this.logado;
  }
}
