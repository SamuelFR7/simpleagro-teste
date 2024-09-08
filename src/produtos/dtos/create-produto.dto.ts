import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    type: String,
    default: 'Soja',
  })
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    minimum: 0.01,
    type: Number,
  })
  preco: number;
}
