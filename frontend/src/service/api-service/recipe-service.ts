import { Recipe } from "@app-types/recipe";

export class RecipeService {
  constructor() {}
  async getRecipes(): Promise<Recipe[]> {
    const response = await fetch("/api/recipes");
    return response.json();
  }

  async getRecipe(id: string): Promise<Recipe> {
    const response = await fetch(`/api/recipes/${id}`);
    return response.json();
  }

  updateRecipe(recipe: Recipe) {
    return fetch(`/api/recipes/${recipe.id}`, {
      method: "PUT",
      body: JSON.stringify(recipe),
    });
  }

  deleteRecipe(id: string) {
    return Promise.resolve(undefined);
  }
}
