import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuantityTypeService } from './quantity-type.service';
import { CreateQuantityTypeDto } from './dto/create-quantity-type.dto';
import { UpdateQuantityTypeDto } from './dto/update-quantity-type.dto';

@Controller('quantity-type')
export class QuantityTypeController {
  constructor(private readonly quantityTypeService: QuantityTypeService) {}

  @Post()
  create(@Body() createQuantityTypeDto: CreateQuantityTypeDto) {
    return this.quantityTypeService.create(createQuantityTypeDto);
  }

  @Get()
  findAll() {
    return this.quantityTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quantityTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuantityTypeDto: UpdateQuantityTypeDto) {
    return this.quantityTypeService.update(+id, updateQuantityTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quantityTypeService.remove(+id);
  }
}
