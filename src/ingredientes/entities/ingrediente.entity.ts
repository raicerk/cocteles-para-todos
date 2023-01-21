import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ingrediente {
  @ApiProperty({
    description: 'Id del ingrediente',
  })
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  style: string;

  @Column()
  image: string;

  @Column({ default: true })
  isActive: boolean;
}
