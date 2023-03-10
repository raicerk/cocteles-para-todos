import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Ingrediente, IngredienteCreate } from './entities/ingrediente.entity';

@ApiTags('ingredientes')
@Controller('ingredientes')
export class IngredientesController {
  constructor(private readonly ingredientesService: IngredientesService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Inserta un ingrediente' })
  @ApiResponse({ type: IngredienteCreate, status: HttpStatus.OK })
  create(
    @Body() createIngredienteDto: CreateIngredienteDto,
  ): Promise<IngredienteCreate> {
    return this.ingredientesService.create(createIngredienteDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Obtiene todos los ingrediente' })
  @ApiResponse({ type: Ingrediente, status: HttpStatus.OK, isArray: true })
  findAll() {
    return this.ingredientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredienteDto: UpdateIngredienteDto,
  ) {
    return this.ingredientesService.update(+id, updateIngredienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientesService.remove(+id);
  }
}
