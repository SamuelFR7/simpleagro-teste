import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateGrupoDeProdutosDto {
  @IsOptional()
  @IsString()
  @ApiProperty({
    required: false,
    default: 'Sementes',
  })
  nome?: string;
}
