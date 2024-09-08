import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGrupoDeProdutosDto {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
