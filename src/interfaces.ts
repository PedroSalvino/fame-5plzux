export interface Auth {
  token: string;
  username: string;
  profile: Array<String>;
}

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
  login: string;
  senha: string;
  perfis: Array<String>;
  cargo: Cargo;
  terminal: Terminal[];
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
  login: string;
  senha: string;
  ativo: boolean;
  terminal: [
    {
      id: number;
      nome: string;
      cnpj: string;
    }
  ];
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
  ativo: boolean;
  categoria?: string;
}

//PUT
export interface PutUsuario {
  id: number;
  nome?: string;
  login?: string;
  senha?: string;
  ativo?: boolean;
  terminal?: [
    {
      id: number;
      nome: string;
      cnpj: string;
    }
  ];
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
