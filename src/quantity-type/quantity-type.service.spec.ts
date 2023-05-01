import { Test, TestingModule } from '@nestjs/testing';
import { QuantityTypeService } from './quantity-type.service';

describe('QuantityTypeService', () => {
  let service: QuantityTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuantityTypeService],
    }).compile();

    service = module.get<QuantityTypeService>(QuantityTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
