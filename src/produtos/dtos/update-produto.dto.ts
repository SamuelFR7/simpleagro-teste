import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProdutoDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    default: 'Soja',
  })
  nome?: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty({
    minimum: 0.01,
    required: false,
    type: Number,
  })
  preco?: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  grupoDeProdutosId: string;
}
