import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGrupoDeProdutosDto } from './dtos/create-grupo-de-produtos.dto';
import { UpdateGrupoDeProdutosDto } from './dtos/update-grupo-de-produtos.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GrupoDeProdutosService {
  constructor(private prismaService: PrismaService) {}

  async create(grupoDeProdutosDto: CreateGrupoDeProdutosDto) {
    await this.prismaService.gruposDeProdutos.create({
      data: grupoDeProdutosDto,
    });
  }

  async findAll() {
    return await this.prismaService.gruposDeProdutos.findMany({
      include: {
        produtos: true,
      },
    });
  }

  async findOne(id: string, incluirProdutos = false) {
    const grupo = await this.prismaService.gruposDeProdutos.findUnique({
      where: {
        id,
      },
      include: {
        produtos: incluirProdutos,
      },
    });

    if (!grupo) {
      throw new NotFoundException(`Grupo com o id: ${id} não foi encontrado`);
    }

    return grupo;
  }

  async update(id: string, grupoDeProdutoDto: UpdateGrupoDeProdutosDto) {
    const grupo = await this.findOne(id);

    await this.prismaService.gruposDeProdutos.update({
      where: {
        id: grupo.id,
      },
      data: grupoDeProdutoDto,
    });
  }

  async delete(id: string) {
    const grupo = await this.findOne(id);

    await this.prismaService.gruposDeProdutos.delete({
      where: {
        id: grupo.id,
      },
    });
  }
}
