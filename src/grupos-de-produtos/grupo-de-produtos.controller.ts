import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GrupoDeProdutosService } from './grupo-de-produtos.service';
import { CreateGrupoDeProdutosDto } from './dtos/create-grupo-de-produtos.dto';
import { UpdateGrupoDeProdutosDto } from './dtos/update-grupo-de-produtos.dto';
import { ApiTags } from '@nestjs/swagger';
import { GruposDeProdutos } from '@prisma/client';

@ApiTags('grupo-de-produtos')
@Controller('grupo-de-produtos')
export class GrupoDeProdutosController {
  constructor(private grupoDeProdutosService: GrupoDeProdutosService) {}

  @Get()
  async findAll(): Promise<GruposDeProdutos[]> {
    return await this.grupoDeProdutosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GruposDeProdutos> {
    return await this.grupoDeProdutosService.findOne(id, true);
  }

  @Post()
  async create(@Body() grupoDeProdutos: CreateGrupoDeProdutosDto) {
    await this.grupoDeProdutosService.create(grupoDeProdutos);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() grupoDeProdutos: UpdateGrupoDeProdutosDto,
  ) {
    await this.grupoDeProdutosService.update(id, grupoDeProdutos);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    await this.grupoDeProdutosService.delete(id);
  }
}
