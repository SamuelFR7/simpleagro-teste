import { randomUUID } from 'crypto';

export class GrupoDeProdutos {
  _id: string;
  nome: string;

  constructor(nome: string) {
    this._id = randomUUID();
    this.nome = nome;
  }
}
