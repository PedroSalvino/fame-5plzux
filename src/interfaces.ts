export interface Terminal {
  id: number;
  nome: string;
  cnpj: string;
}

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
  cargo: Cargo;
}

export interface Cargo {
  id: number;
  cargo: string;
}

export interface Paralisacao {
  id: number;
  inicio: string;
  termino: string;
  data: string;
  descricao: string;
  qtdVeiculos: number;
  tipoParalisacao: TipoParalisacao;
}

export interface TipoParalisacao {
  id: number;
  tipoParalisacao: string;
}

// GETS
export interface TerminalApiResponse {
  content: Terminal[];
}

export interface UsuarioApiResponse {
  content: Usuario[];
}

export interface CargoApiResponse {
  content: Cargo[];
}

export interface ParalisacaoApiResponse {
  content: Paralisacao[];
}

export interface TipoParalisacaoApiResponse {
  content: TipoParalisacao[];
}

// POSTS
export interface;
