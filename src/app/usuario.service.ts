import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  PostUsuario,
  PutUsuario,
  Usuario,
  UsuarioApiResponse,
} from '../interfaces';
import { GlobalService } from './global.service';

@Injectable()
export class UsuarioService {
  usuarios: Usuario[] = [];
  usuarioPicked: Usuario | null = null;
  isAdmin = false;

  constructor(private http: HttpClient, public global: GlobalService) {}

  login(userLogin: string, userSenha: string) {
    this.http
      .get<Usuario>(
        `${this.global.api}/usuario/login/${userLogin}/${userSenha}`
      )
      .subscribe((data) => {
        this.usuarioPicked = data;
        localStorage.setItem(
          'usuarioPicked',
          JSON.stringify(this.usuarioPicked)
        );
        if (this.usuarioPicked) this.checkForAdmin();
      });
  }

  logoff() {
    this.usuarioPicked = null;
    localStorage.removeItem('usuarioPicked');
  }

  checkLocalStorageLogin() {
    if (localStorage.getItem('auth'))
      this.usuarioPicked = JSON.parse(
        localStorage.getItem('usuarioPicked') || '{}'
      );

    if (this.usuarioPicked) this.checkForAdmin();
  }

  checkForAdmin() {
    if (this.usuarioPicked)
      this.isAdmin = this.usuarioPicked.perfis.some(
        (e: String) => e === 'ADMIN'
      );
  }

  getUsuario(id: number) {
    this.http
      .get<Usuario>(`${this.global.api}/usuario/${id}`)
      .subscribe((data) => {
        if (data) this.usuarioPicked = data;
      });
  }

  getUsuarios() {
    this.http
      .get<UsuarioApiResponse>(`${this.global.api}/usuario/page`)
      .subscribe((data) => {
        if (data) this.usuarios = data.content;
      });
  }

  postUsuario(body: PostUsuario) {
    this.http
      .post(`${this.global.api}/usuario`, body)
      .subscribe((data) => console.log(data));

    console.log(body);
  }

  putUsuario(body: PutUsuario) {
    this.http
      .put(`${this.global.api}/usuario`, body)
      .subscribe((data) => console.log(data));

    console.log(body);
  }

  deleteUsuario(id: number) {
    this.http.delete<any>(`${this.global.api}/usuario/${id}`);
  }
}
