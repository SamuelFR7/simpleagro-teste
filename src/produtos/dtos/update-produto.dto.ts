import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProdutoDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    default: 'Milho',
  })
  nome?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    minimum: 1,
    required: false,
    type: Number,
  })
  preco?: number;

  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
  })
  grupoDeProdutosId: string;
}
