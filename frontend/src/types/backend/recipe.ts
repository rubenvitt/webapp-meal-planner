export type Recipe = {
  name: string;
  preparationTime: string;
  servings: number;
  ingredients: string[];
  steps: string[];
  type: "MEAT" | "FISH" | "VEGETARIAN" | "VEGAN";
  imageUrl?: string;
};
