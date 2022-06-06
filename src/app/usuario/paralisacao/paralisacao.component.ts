import { Component, OnInit } from '@angular/core';
import { PostParalisacao } from '../../../interfaces';
import { GlobalService } from '../../global.service';
import { ParalisacaoService } from '../../paralisacao.service';

@Component({
  selector: 'app-paralisacao',
  templateUrl: './paralisacao.component.html',
  styleUrls: ['./paralisacao.component.css'],
})
export class ParalisacaoComponent implements OnInit {
  constructor(
    public global: GlobalService,
    public paralisacao: ParalisacaoService
  ) {}

  ngOnInit(): void {
    this.paralisacao.getParalisacoes();
  }

  paralisacaoPost: PostParalisacao = {} as PostParalisacao;

  data = '';
  inicio = '';
  termino = '';
  veiculos = 0;
  descricao = '';

  cadastrarParalisacao() {
    if (
      this.data !== '' &&
      this.inicio !== '' &&
      this.termino !== '' &&
      this.veiculos > 0 &&
      this.descricao !== ''
    ) {
      this.paralisacaoPost = {
        inicio: this.inicio,
        termino: this.termino,
        data: this.data,
        descricao: this.descricao,
        qtdVeiculos: this.veiculos,
        ativo: true,
        categoria: null,
      };

      this.paralisacao.postParalisacao(this.paralisacaoPost);
    }
  }
}
