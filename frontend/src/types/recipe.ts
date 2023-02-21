import { MealType } from "@molecules/CookingPlanItem";

export class Recipe {
  name: string;
  id: string;
  preparationTime: string;
  servings: number;
  ingredients: string[];
  steps: string[];
  type: MealType;
  imageUrl?: string;

  constructor(
    name: string,
    id: string,
    preparationTime: string,
    servings: number,
    ingredients: string[],
    steps: string[],
    type: MealType,
    imageUrl?: string
  ) {
    this.name = name;
    this.id = id;
    this.preparationTime = preparationTime;
    this.servings = servings;
    this.ingredients = ingredients;
    this.steps = steps;
    this.type = type;
    this.imageUrl = imageUrl;
  }
}
