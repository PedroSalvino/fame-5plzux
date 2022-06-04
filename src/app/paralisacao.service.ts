import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Paralisacao,
  ParalisacaoApiResponse,
  PostParalisacao,
  PutParalisacao,
} from '../interfaces';
import { GlobalService } from './global.service';

@Injectable()
export class ParalisacaoService {
  paralisacoes: Paralisacao[] = [];
  paralisacaoPicked: Paralisacao = {} as Paralisacao;
  constructor(private http: HttpClient, public global: GlobalService) {}

  getParalisacao(id: number) {
    this.http
      .get<Paralisacao>(`${this.global.api}/paralisacao/${id}`)
      .subscribe((data) => {
        if (data) this.paralisacaoPicked = data;
      });
  }

  getParalisacoes() {
    this.http
      .get<ParalisacaoApiResponse>(`${this.global.api}/paralisacao/page`)
      .subscribe((data) => {
        if (data) this.paralisacoes = data.content;
      });
  }

  postParalisacao(body: PostParalisacao) {
    this.http
      .post(`${this.global.api}/paralisacao`, body)
      .subscribe((data) => console.log(data));

    console.log(body);
  }

  putParalisacao(body: PutParalisacao) {
    this.http
      .put(`${this.global.api}/paralisacao`, body)
      .subscribe((data) => console.log(data));

    console.log(body);
  }

  deleteParalisacao(id: number) {
    this.http.delete<any>(`${this.global.api}/paralisacao/${id}`);
  }
}
