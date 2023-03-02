import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientDto } from './create-ingredient.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateIngredientDto extends PartialType(CreateIngredientDto) {
  @IsNotEmpty({})
  name: string;
}
