import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dtos/create-produto.dto';
import { UpdateProdutoDto } from './dtos/update-produto.dto';
import { ApiTags } from '@nestjs/swagger';
import { Produtos } from '@prisma/client';

@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  async findAll(): Promise<Produtos[]> {
    return await this.produtosService.findAll();
  }

  @Post()
  async create(@Body() produto: CreateProdutoDto) {
    await this.produtosService.create(produto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Produtos> {
    return await this.produtosService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() produto: UpdateProdutoDto) {
    await this.produtosService.update(id, produto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.produtosService.delete(id);
  }
}
