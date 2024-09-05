import { randomUUID } from 'crypto';

export class Produto {
  _id: string;
  nome: string;

  constructor({ nome }: { nome: string }) {
    this._id = randomUUID();
    this.nome = nome;
  }
}
