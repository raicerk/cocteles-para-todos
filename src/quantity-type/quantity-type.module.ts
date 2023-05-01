import { Module } from '@nestjs/common';
import { QuantityTypeService } from './quantity-type.service';
import { QuantityTypeController } from './quantity-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuantityType } from './entities/quantity-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([QuantityType])],
  controllers: [QuantityTypeController],
  providers: [QuantityTypeService],
})
export class QuantityTypeModule {}
