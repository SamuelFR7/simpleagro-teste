import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdutoDto } from './dtos/create-produto.dto';
import { Produto } from './entities/produto.entity';
import { UpdateProdutoDto } from './dtos/update-produto.dto';

@Injectable()
export class ProdutosService {
  private readonly produtos: Produto[] = [];

  create(produtoDto: CreateProdutoDto) {
    const produto = new Produto(produtoDto.nome, produtoDto.preco);
    this.produtos.push(produto);
  }

  findAll() {
    return this.produtos;
  }

  findOne(id: string) {
    const produto = this.produtos.find((produto) => produto._id === id);
    if (!produto) {
      throw new NotFoundException(`Produto com o id: ${id} não foi encontrado`);
    }
    return produto;
  }

  update(id: string, produtoDto: UpdateProdutoDto) {
    const produto = this.findOne(id);
    Object.assign(produto, produtoDto);
  }

  delete(id: string) {
    const produtoIndex = this.produtos.findIndex(
      (produto) => produto._id === id,
    );
    if (produtoIndex === -1) {
      throw new NotFoundException(`Produto com o id: ${id} não foi encontrado`);
    }

    this.produtos.splice(produtoIndex, 1);
  }
}
