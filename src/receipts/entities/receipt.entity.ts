import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Receipt {
  @ApiProperty({ description: 'Receipt Id' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Name of receipt' })
  @Column()
  name: string;

  @ApiProperty({ description: 'Author to receipt' })
  @Column()
  author: string;

  @ApiProperty({ description: 'History of receipts' })
  @Column()
  history: string;

  @ApiProperty({ description: 'Preparation of receipt' })
  @Column()
  preparation: string;

  @ApiProperty({ description: 'Status of publication of receipt' })
  @Column({ default: true })
  public: boolean;
}

export class ReceiptCreate {
  @ApiProperty({ description: 'Receipt Id' })
  id: number;
}
