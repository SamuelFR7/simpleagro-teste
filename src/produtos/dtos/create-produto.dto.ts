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
    minimum: 1,
    type: Number,
  })
  precoEmCentavos: number;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  grupoDeProdutosId: string;
}
