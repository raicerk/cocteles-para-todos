import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIngredienteDto {
  @ApiProperty({ description: 'Nombre del ingrediente' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Estilo del ingrediente' })
  @IsString()
  @IsNotEmpty()
  style: string;

  @ApiProperty({ description: 'Imagen del ingrediente' })
  @IsString()
  image: string;
}
