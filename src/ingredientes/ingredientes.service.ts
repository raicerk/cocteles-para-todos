import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngredienteDto } from './dto/create-ingrediente.dto';
import { UpdateIngredienteDto } from './dto/update-ingrediente.dto';
import { Ingrediente, IngredienteCreate } from './entities/ingrediente.entity';

@Injectable()
export class IngredientesService {
  constructor(
    @InjectRepository(Ingrediente)
    private ingredientesRepository: Repository<Ingrediente>,
  ) {}
  async create(
    createIngredienteDto: CreateIngredienteDto,
  ): Promise<IngredienteCreate> {
    const { id } = await this.ingredientesRepository.save(createIngredienteDto);
    return {
      id,
    };
  }

  async findAll(): Promise<Array<Ingrediente>> {
    return await this.ingredientesRepository.find();
  }

  async findOne(id: number) {
    return await this.ingredientesRepository.findOneBy({ id });
  }

  update(id: number, updateIngredienteDto: UpdateIngredienteDto) {
    return `This action updates a #${id} ingrediente`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingrediente`;
  }
}
