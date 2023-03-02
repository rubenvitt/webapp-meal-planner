import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { DataModule } from '../data/data.module';

@Module({
  controllers: [IngredientsController],
  imports: [DataModule],
  providers: [IngredientsService],
})
export class IngredientsModule {}
