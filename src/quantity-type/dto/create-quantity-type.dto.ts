import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateQuantityTypeDto {
  @ApiProperty({ description: 'Quantity Type' })
  @IsString()
  @IsNotEmpty()
  quantityType: string;
}
