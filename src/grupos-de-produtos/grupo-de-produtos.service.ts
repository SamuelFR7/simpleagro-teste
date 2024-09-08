import { Injectable, NotFoundException } from '@nestjs/common';
import { GrupoDeProdutos } from './entities/grupo-de-produtos.entity';
import { CreateGrupoDeProdutosDto } from './dtos/create-grupo-de-produtos.dto';
import { UpdateGrupoDeProdutosDto } from './dtos/update-grupo-de-produtos.dto';

@Injectable()
export class GrupoDeProdutosService {
  private readonly grupos: GrupoDeProdutos[] = [];

  create({ nome }: CreateGrupoDeProdutosDto) {
    const grupo = new GrupoDeProdutos(nome);
    this.grupos.push(grupo);
  }

  findAll() {
    return this.grupos;
  }

  findOne(id: string) {
    const grupo = this.grupos.find((grupo) => grupo._id === id);
    if (!grupo) {
      throw new NotFoundException(`Grupo com o id: ${id} não foi encontrado`);
    }

    return grupo;
  }

  update(id: string, grupoDeProduto: UpdateGrupoDeProdutosDto) {
    const grupo = this.findOne(id);
    Object.assign(grupo, grupoDeProduto);
  }

  delete(id: string) {
    const grupoIndex = this.grupos.findIndex((grupo) => grupo._id === id);
    if (grupoIndex === -1) {
      throw new NotFoundException(`Grupo com o id: ${id} não foi encontrado`);
    }

    this.grupos.splice(grupoIndex, 1);
  }
}
