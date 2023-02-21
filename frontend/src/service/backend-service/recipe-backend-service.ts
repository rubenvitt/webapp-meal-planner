import { Recipe } from "@app-types/backend/recipe";

export class RecipeBackendService {
  static async getRecipes(): Promise<Recipe[]> {
    /*const response = await fetch(
      `${getRequiredEnvironmentVariable("BACKEND_URI")}/recipes`
    );
    const recipes = await response.json();
    return recipes;*/

    return [
      {
        name: "Lasagne",
        preparationTime: "10 min",
        servings: 1,
        ingredients: ["Lasagne", "Tomato sauce", "Cheese"],
        steps: ["Cook lasagne", "Add tomato sauce", "Add cheese"],
        type: "MEAT",
      },
    ];
  }
}
