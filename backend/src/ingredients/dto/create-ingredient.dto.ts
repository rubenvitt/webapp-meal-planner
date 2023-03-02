import { IsNotEmpty } from 'class-validator';

export class CreateIngredientDto {
  @IsNotEmpty({})
  name: string;
}
