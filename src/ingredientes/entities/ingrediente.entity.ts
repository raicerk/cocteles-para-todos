import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingrediente {
  @ApiProperty({ description: 'Id del ingrediente' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Nombre del ingrediente' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Estilo del ingrediente' })
  @Column()
  style: string;

  @ApiProperty({ description: 'Imagen del ingrediente' })
  @Column()
  image: string;

  @ApiProperty({ description: 'Estado del ingrediente' })
  @Column({ default: true })
  isActive: boolean;
}

export class IngredienteCreate {
  @ApiProperty({ description: 'Id del ingrediente' })
  id: number;
}
