import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { Ingredient, IngredientCreate } from './entities/ingredient.entity';

@Injectable()
export class IngredientsService {
  constructor(
    @InjectRepository(Ingredient)
    private ingredientsRepository: Repository<Ingredient>,
  ) {}
  async create(
    createIngredientDto: CreateIngredientDto,
  ): Promise<IngredientCreate> {
    const { id } = await this.ingredientsRepository.save(createIngredientDto);
    return {
      id,
    };
  }

  async findAll(): Promise<Array<Ingredient>> {
    return await this.ingredientsRepository.find();
  }

  async findOne(id: number) {
    return await this.ingredientsRepository.findOneBy({ id });
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return `This action updates a #${id} ingredient`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredient`;
  }
}
