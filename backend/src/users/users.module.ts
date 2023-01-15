import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DataModule } from '../data/data.module';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  imports: [DataModule],
  controllers: [UsersController],
})
export class UsersModule {}
