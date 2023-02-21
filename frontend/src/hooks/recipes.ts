import { useMutation, useQuery } from "react-query";
import { Recipe } from "@/types/recipe";
import { RecipeService } from "@api-service/recipe-service";
import { queryClient } from "@/app/layout";

const recipeService = new RecipeService();

function useRecipes() {
  const { data, error, isLoading } = useQuery<Recipe[], Error>("recipes", () =>
    recipeService.getRecipes()
  );

  return { recipes: data, error, isLoading };
}

function useRecipe(id: string) {
  const {
    data: recipe,
    error: getError,
    isLoading: getIsLoading,
  } = useQuery<Recipe, Error>(["recipe", id], () =>
    recipeService.getRecipe(id)
  );

  const {
    mutate: put,
    isLoading: putLoading,
    error: putError,
  } = useMutation((recipe: Recipe) => recipeService.updateRecipe(recipe), {
    onSuccess: async () => {
      await queryClient.invalidateQueries("recipes");
    },
  });

  const {
    mutate: deleteRecipe,
    isLoading: deleteLoading,
    error: deleteError,
  } = useMutation((id: string) => recipeService.deleteRecipe(id), {
    onSuccess: async () => {
      await queryClient.invalidateQueries("recipes");
    },
  });

  return {
    recipe: {
      recipe,
      error: getError,
      isLoading: getIsLoading,
    },
    put: {
      mutate: put,
      isLoading: putLoading,
      error: putError,
    },
    delete: {
      mutate: deleteRecipe,
      isLoading: deleteLoading,
      error: deleteError,
    },
  };
}

export { useRecipes, useRecipe };
