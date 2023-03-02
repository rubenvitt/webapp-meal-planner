import { Injectable, Logger } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from '../data/prisma/prisma.service';

@Injectable()
export class RecipesService {
  private readonly logger = new Logger(RecipesService.name);
  constructor(private prismaService: PrismaService) {}

  async create(createRecipeDto: CreateRecipeDto) {
    const ingredients = await this.prismaService.ingredient.findMany({
      where: {
        name: {
          in: createRecipeDto.ingredients.map((ingredient) => ingredient.name),
        },
      },
    });

    console.log(ingredients);

    // return createRecipeDto.ingredients without ingredients that already exist
    const newIngredients = createRecipeDto.ingredients.filter(
      (ingredient) =>
        !ingredients
          .map((ingredient) => ingredient.name)
          .includes(ingredient.name),
    );

    return newIngredients;
  }

  findAll() {
    return `This action returns all recipes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }

  private async createOrFindIngredients(
    ingredients: { name: string; amount: number; unit: string }[],
  ) {
    const existingIngredients = await this.prismaService.ingredient.findMany({
      where: {
        name: {
          in: ingredients.map((ingredient) => ingredient.name),
        },
      },
    });

    const newIngredients = ingredients.filter(
      (ingredient) =>
        !existingIngredients
          .map((ingredient) => ingredient.name)
          .includes(ingredient.name),
    );

    await this.prismaService.ingredient.createMany({
      data: newIngredients.map((ingredient) => ({
        name: ingredient.name,
      })),
    });

    const newIngredientsCreated = await this.prismaService.ingredient.findMany({
      where: {
        name: {
          in: newIngredients.map((ingredient) => ingredient.name),
        },
      },
    });

    return [...(await existingIngredients), ...(await newIngredientsCreated)];
  }
}
