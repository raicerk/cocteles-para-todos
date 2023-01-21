import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { Ingrediente } from './entities/ingrediente.entity';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingrediente)
    private ingredientesRepository: Repository<Ingrediente>,
  ) {}
  async create(createIngredienteDto: CreateIngredienteDto): Promise<string> {
    const response = await this.ingredientesRepository.save(
      createIngredienteDto,
    );
    console.log(response);
    return 'This action adds a new ingrediente';
  }

  async findAll() {
    return await this.ingredientesRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} ingrediente`;
  }

  update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    return `This action updates a #${id} ingrediente`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingrediente`;
  }
}
