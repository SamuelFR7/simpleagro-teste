import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGrupoDeProdutosDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    default: 'Sementes',
  })
  nome: string;
}
