import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}

  logado: Boolean;

  logar() {
    this.logado = true;
  }

  logout() {
    this.logado = false;
  }
}
