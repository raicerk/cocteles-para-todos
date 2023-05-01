import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class QuantityType {
  @ApiProperty({ description: 'Quantity Type Id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Quantity Type' })
  @Column()
  quantityType: string;
}

export class QuantityTypeCreate {
  @ApiProperty({ description: 'Quantity Type Id' })
  id: number;
}
