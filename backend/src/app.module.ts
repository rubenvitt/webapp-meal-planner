import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';

@Module({
  imports: [DataModule, UsersModule, RecipesModule, IngredientsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
