import { Injectable } from '@nestjs/common';
import { CreateQuantityTypeDto } from './dto/create-quantity-type.dto';
import { UpdateQuantityTypeDto } from './dto/update-quantity-type.dto';

@Injectable()
export class QuantityTypeService {
  create(createQuantityTypeDto: CreateQuantityTypeDto) {
    return 'This action adds a new quantityType';
  }

  findAll() {
    return `This action returns all quantityType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} quantityType`;
  }

  update(id: number, updateQuantityTypeDto: UpdateQuantityTypeDto) {
    return `This action updates a #${id} quantityType`;
  }

  remove(id: number) {
    return `This action removes a #${id} quantityType`;
  }
}
