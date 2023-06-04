import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateReceiptDto {
  @ApiProperty({ description: 'Name of receipt' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Author to receipt' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ description: 'History of receipts' })
  @IsString()
  @IsOptional()
  history: string;

  @ApiProperty({ description: 'Preparation of receipt' })
  @IsString()
  preparation: string;

  @ApiProperty({ description: 'Status of publication of receipt' })
  @IsBoolean()
  public: boolean;
}
