import { Module } from '@nestjs/common';
import { GrupoDeProdutosController } from './grupo-de-produtos.controller';
import { GrupoDeProdutosService } from './grupo-de-produtos.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [GrupoDeProdutosController],
  providers: [GrupoDeProdutosService, PrismaService],
})
export class GrupoDeProdutosModule {}
