import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
  @ApiProperty({ description: 'Ingredient Id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Name og ingredient' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Style ingredient' })
  @Column()
  style: string;

  @ApiProperty({ description: 'Image ingredient' })
  @Column()
  image: string;

  @ApiProperty({ description: 'State ingredient' })
  @Column({ default: true })
  isActive: boolean;
}

export class IngredientCreate {
  @ApiProperty({ description: 'Ingredient Id' })
  id: number;
}
