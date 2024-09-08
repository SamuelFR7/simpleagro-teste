import { IsOptional, IsString } from 'class-validator';

export class UpdateGrupoDeProdutosDto {
  @IsOptional()
  @IsString()
  nome?: string;
}
