import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GrupoDeProdutos } from './entities/grupo-de-produtos.entity';
import { GrupoDeProdutosService } from './grupo-de-produtos.service';
import { CreateGrupoDeProdutosDto } from './dtos/create-grupo-de-produtos.dto';
import { UpdateGrupoDeProdutosDto } from './dtos/update-grupo-de-produtos.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('grupo-de-produtos')
@Controller('grupo-de-produtos')
export class GrupoDeProdutosController {
  constructor(private grupoDeProdutosService: GrupoDeProdutosService) {}

  @Get()
  findAll(): GrupoDeProdutos[] {
    return this.grupoDeProdutosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): GrupoDeProdutos {
    return this.grupoDeProdutosService.findOne(id);
  }

  @Post()
  create(@Body() grupoDeProdutos: CreateGrupoDeProdutosDto) {
    this.grupoDeProdutosService.create(grupoDeProdutos);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() grupoDeProdutos: UpdateGrupoDeProdutosDto,
  ) {
    this.grupoDeProdutosService.update(id, grupoDeProdutos);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.grupoDeProdutosService.delete(id);
  }
}
