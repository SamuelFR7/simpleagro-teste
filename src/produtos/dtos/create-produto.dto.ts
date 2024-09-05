import { IsNotEmpty } from 'class-validator';

export class CreateProdutoDto {
  @IsNotEmpty()
  nome: string;
}
