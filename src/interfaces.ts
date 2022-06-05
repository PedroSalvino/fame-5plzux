export interface Terminal {
  id: number;
  nome: string;
  cnpj: string;
  ativo: boolean;
  tipoCarga: string[];
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
}

// export interface TipoParalisacao {
//   id: number;
//   tipoParalisacao: string;
// }

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

// export interface TipoParalisacaoApiResponse {
//   content: TipoParalisacao[];
// }

// POSTS
export interface PostUsuario {
  id?: number;
  nome: string;
  email: string;
  senha: string;
  terminal: {
    id: number;
    nome: string;
    cnpj: string;
  };
  cargo: {
    id: number;
    cargo: string;
  };
}

export interface PostParalisacao {
  id?: number;
  inicio: string;
  termino: string;
  data: string;
  descricao: string;
  qtdVeiculos: number;
}

//PUT
export interface PutUsuario {
  id: number;
  nome?: string;
  email?: string;
  senha?: string;
  terminal?: {
    id: number;
    nome: string;
    cnpj: string;
  };
  cargo?: {
    id: number;
    cargo: string;
  };
}

export interface PutParalisacao {
  id: number;
  inicio?: string;
  termino?: string;
  data?: string;
  descricao?: string;
  qtdVeiculos?: number;
}
