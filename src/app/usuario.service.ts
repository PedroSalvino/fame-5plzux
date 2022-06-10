import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
  isLogin = false;

  constructor(
    private http: HttpClient,
    public global: GlobalService,
    public router: Router
  ) {}

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
        if (this.usuarioPicked) {
          this.checkForAdmin();
          this.logar();
        }
      });
  }

  logar() {
    this.isLogin = true;
    localStorage.setItem('isLogin', JSON.stringify(this.isLogin));
    this.router.navigate(['/dashboard']);
  }

  logoff() {
    this.usuarioPicked = null;
    this.isLogin = false;
    localStorage.removeItem('usuarioPicked');
  }

  checkLocalStorageLogin() {
    if (localStorage.getItem('usuarioPicked'))
      this.usuarioPicked = JSON.parse(
        localStorage.getItem('usuarioPicked') || '{}'
      );

    if (this.usuarioPicked) this.checkForAdmin();
  }

  isLogado() {
    if (localStorage.getItem('isLogin'))
      this.isLogin = JSON.parse(localStorage.getItem('isLogin') || '');

    return this.isLogin;
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
