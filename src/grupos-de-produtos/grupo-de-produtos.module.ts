import { Module } from '@nestjs/common';
import { GrupoDeProdutosController } from './grupo-de-produtos.controller';
import { GrupoDeProdutosService } from './grupo-de-produtos.service';

@Module({
  controllers: [GrupoDeProdutosController],
  providers: [GrupoDeProdutosService],
})
export class GrupoDeProdutosModule {}
