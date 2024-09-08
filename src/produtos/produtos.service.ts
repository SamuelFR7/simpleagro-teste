import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdutoDto } from './dtos/create-produto.dto';
import { UpdateProdutoDto } from './dtos/update-produto.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProdutosService {
  constructor(private prismaService: PrismaService) {}

  async create(produtoDto: CreateProdutoDto) {
    await this.prismaService.produtos.create({
      data: produtoDto,
    });
  }

  async findAll() {
    return this.prismaService.produtos.findMany();
  }

  async findOne(id: string) {
    const produto = await this.prismaService.produtos.findUnique({
      where: {
        id,
      },
    });

    if (!produto) {
      throw new NotFoundException(`Produto com o id: ${id} não foi encontrado`);
    }

    return produto;
  }

  async update(id: string, produtoDto: UpdateProdutoDto) {
    const produto = await this.findOne(id);

    await this.prismaService.produtos.update({
      where: {
        id: produto.id,
      },
      data: produtoDto,
    });
  }

  async delete(id: string) {
    const produto = await this.findOne(id);

    await this.prismaService.produtos.delete({
      where: {
        id: produto.id,
      },
    });
  }
}
