import { Test, TestingModule } from '@nestjs/testing';
import { QuantityTypeController } from './quantity-type.controller';
import { QuantityTypeService } from './quantity-type.service';

describe('QuantityTypeController', () => {
  let controller: QuantityTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuantityTypeController],
      providers: [QuantityTypeService],
    }).compile();

    controller = module.get<QuantityTypeController>(QuantityTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
