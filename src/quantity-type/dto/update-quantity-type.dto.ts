import { PartialType } from '@nestjs/swagger';
import { CreateQuantityTypeDto } from './create-quantity-type.dto';

export class UpdateQuantityTypeDto extends PartialType(CreateQuantityTypeDto) {}
