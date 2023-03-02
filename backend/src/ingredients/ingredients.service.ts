import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { PrismaService } from '../data/prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

@Injectable()
export class IngredientsService {
  constructor(private prismaService: PrismaService) {}

  async create(createIngredientDto: CreateIngredientDto) {
    // only create if it doesn't exist
    return this.prismaService.ingredient
      .create({
        data: createIngredientDto,
      })
      .catch((error: PrismaClientKnownRequestError) => {
        if (error.code === 'P2002') {
          throw new HttpException(
            `Ingredient with name ${createIngredientDto.name} already exists`,
            HttpStatus.CONFLICT,
          );
        }
      });
  }

  findAll() {
    return this.prismaService.ingredient.findMany({});
  }

  findOne(id: string) {
    return this.prismaService.ingredient
      .findUnique({
        where: { id },
      })
      .catch((error: PrismaClientKnownRequestError) => {
        if (error.code === 'P2025') {
          throw new HttpException(
            `Ingredient with id ${id} does not exist`,
            HttpStatus.NOT_FOUND,
          );
        }
      });
  }

  update(id: string, updateIngredientDto: UpdateIngredientDto) {
    return this.prismaService.ingredient
      .update({
        where: { id },
        data: updateIngredientDto,
      })
      .catch((error: PrismaClientKnownRequestError) => {
        if (error.code === 'P2025') {
          throw new HttpException(
            `Ingredient with id ${id} does not exist`,
            HttpStatus.NOT_FOUND,
          );
        }
        if (error.code === 'P2002') {
          throw new HttpException(
            `Ingredient with name ${updateIngredientDto.name} already exists`,
            HttpStatus.CONFLICT,
          );
        }
      });
  }

  remove(id: string) {
    return this.prismaService.ingredient
      .delete({
        where: { id },
      })
      .catch((error: PrismaClientKnownRequestError) => {
        if (error.code === 'P2025') {
          throw new HttpException(
            `Ingredient with id ${id} does not exist`,
            HttpStatus.NOT_FOUND,
          );
        }
      });
  }
}
