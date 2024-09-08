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
import { Produto } from './entities/produto.entity';
import { UpdateProdutoDto } from './dtos/update-produto.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('produtos')
@Controller('produtos')
export class ProdutosController {
  constructor(private produtosService: ProdutosService) {}

  @Get()
  findAll(): Produto[] {
    return this.produtosService.findAll();
  }

  @Post()
  create(@Body() produto: CreateProdutoDto) {
    this.produtosService.create(produto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtosService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() produto: UpdateProdutoDto) {
    this.produtosService.update(id, produto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.produtosService.delete(id);
  }
}
