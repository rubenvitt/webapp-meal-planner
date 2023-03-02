import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipesController } from './recipes.controller';
import { DataModule } from '../data/data.module';

@Module({
  controllers: [RecipesController],
  imports: [DataModule],
  providers: [RecipesService],
})
export class RecipesModule {}
