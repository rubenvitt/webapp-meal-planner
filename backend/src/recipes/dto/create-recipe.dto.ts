import { IsNotEmpty } from 'class-validator';

export class CreateRecipeDto {
  groupId: string;
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  ingredients: {
    name: string;
    amount: number;
    unit: string;
  }[];
}
