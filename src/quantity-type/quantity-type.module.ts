import { Module } from '@nestjs/common';
import { QuantityTypeService } from './quantity-type.service';
import { QuantityTypeController } from './quantity-type.controller';

@Module({
  controllers: [QuantityTypeController],
  providers: [QuantityTypeService]
})
export class QuantityTypeModule {}
