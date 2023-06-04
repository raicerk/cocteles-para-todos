import { Injectable } from '@nestjs/common';
import { CreateReceiptDto } from './dto/create-receipt.dto';
import { UpdateReceiptDto } from './dto/update-receipt.dto';
import { Receipt, ReceiptCreate } from './entities/receipt.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ReceiptsService {
  constructor(
    @InjectRepository(Receipt)
    private receiptsRepository: Repository<Receipt>,
  ) {}
  async create(createReceiptDto: CreateReceiptDto): Promise<ReceiptCreate> {
    const { id } = await this.receiptsRepository.save(createReceiptDto);
    return {
      id,
    };
  }

  async findAll(): Promise<Array<Receipt>> {
    return this.receiptsRepository.find();
  }

  async findOne(id: number): Promise<Receipt> {
    return await this.receiptsRepository.findOneBy({ id });
  }

  update(id: number, updateReceiptDto: UpdateReceiptDto) {
    return `This action updates a #${id} receipt`;
  }

  remove(id: number) {
    return `This action removes a #${id} receipt`;
  }
}
