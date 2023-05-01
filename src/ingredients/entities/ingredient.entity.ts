import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingredient {
  @ApiProperty({ description: 'Ingredient Id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Name of ingredient' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Style of ingredient' })
  @Column()
  style: string;

  @ApiProperty({ description: 'Image the ingredient' })
  @Column()
  image: string;

  @ApiProperty({ description: 'State of ingredient' })
  @Column({ default: true })
  isActive: boolean;
}

export class IngredientCreate {
  @ApiProperty({ description: 'Ingredient Id' })
  id: number;
}
