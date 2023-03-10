import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  public async findAllUsers() {
    return this.usersService.findUsers();
  }

  @Post()
  public async createUser() {
    return this.usersService.createUser();
  }
}
