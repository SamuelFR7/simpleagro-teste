import { Module } from '@nestjs/common';
import { ProdutosModule } from './produtos/produtos.module';
import { GrupoDeProdutosModule } from './grupos-de-produtos/grupo-de-produtos.module';

@Module({
  imports: [ProdutosModule, GrupoDeProdutosModule],
})
export class AppModule {}
