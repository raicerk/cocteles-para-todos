import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuantityTypeDto } from './dto/create-quantity-type.dto';
import {
  QuantityType,
  QuantityTypeCreate,
} from './entities/quantity-type.entity';

@Injectable()
export class QuantityTypeService {
  constructor(
    @InjectRepository(QuantityType)
    private quantityTypeRepository: Repository<QuantityType>,
  ) {}

  async create(
    CcreateQuantityTypeDto: CreateQuantityTypeDto,
  ): Promise<QuantityTypeCreate> {
    const { id } = await this.quantityTypeRepository.save(
      CcreateQuantityTypeDto,
    );
    return {
      id,
    };
  }

  async findAll(): Promise<Array<QuantityType>> {
    return await this.quantityTypeRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} quantityType`;
  }
}
