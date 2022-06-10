import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  api = 'https://fame-api.herokuapp.com';
  usuario: '';
  senha: '';
  auth: Auth | null = null;
  authProfle = null;
  isAdmin = false;

  constructor(private http: HttpClient) {}

  login() {
    this.http
      .post<any>(`${this.api}/login`, {
        login: this.usuario,
        senha: this.senha,
      })
      .subscribe((data) => {
        this.auth = data;
        localStorage.setItem('auth', JSON.stringify(this.auth));
        if (this.auth) this.checkForAdmin();
      });
  }

  checkForAdmin() {
    if (this.auth)
      this.isAdmin = this.auth.profile.some((e: String) => e === 'ADMIN');
  }

  checkLocalStorageLogin() {
    if (localStorage.getItem('auth'))
      this.auth = JSON.parse(localStorage.getItem('auth') || '{}');

    if (this.auth) this.checkForAdmin();
  }

  logout() {
    this.auth = null;
    localStorage.removeItem('auth');
  }
}
