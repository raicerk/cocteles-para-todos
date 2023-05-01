import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { QuantityTypeService } from './quantity-type.service';
import { CreateQuantityTypeDto } from './dto/create-quantity-type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  QuantityType,
  QuantityTypeCreate,
} from './entities/quantity-type.entity';

@ApiTags('quantity-type')
@Controller('quantity-type')
export class QuantityTypeController {
  constructor(private readonly quantityTypeService: QuantityTypeService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Insert a new quantity type for ingredients' })
  @ApiResponse({ type: QuantityTypeCreate, status: HttpStatus.OK })
  create(@Body() createQuantityTypeDto: CreateQuantityTypeDto) {
    return this.quantityTypeService.create(createQuantityTypeDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all quantity type' })
  @ApiResponse({ type: QuantityType, status: HttpStatus.OK, isArray: true })
  findAll() {
    return this.quantityTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.quantityTypeService.findOne(+id);
  }
}
