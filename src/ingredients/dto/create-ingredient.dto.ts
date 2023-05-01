import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateIngredientDto {
  @ApiProperty({ description: 'Nombre del ingredient' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Estilo del ingredient' })
  @IsString()
  @IsNotEmpty()
  style: string;

  @ApiProperty({ description: 'Imagen del ingredient' })
  @IsString()
  image: string;
}
