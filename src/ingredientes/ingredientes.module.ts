import { Module } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { IngredientesController } from './ingredientes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingrediente } from './entities/ingrediente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ingrediente])],
  controllers: [IngredientesController],
  providers: [IngredientesService],
})
export class IngredientesModule {}
