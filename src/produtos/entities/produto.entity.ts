import { randomUUID } from 'crypto';

export class Produto {
  _id: string;
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this._id = randomUUID();
    this.nome = nome;
    this.preco = preco;
  }
}
