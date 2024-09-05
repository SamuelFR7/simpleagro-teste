import { IsOptional, IsString } from 'class-validator';

export class UpdateProdutoDto {
  @IsOptional()
  @IsString()
  nome?: string;
}
