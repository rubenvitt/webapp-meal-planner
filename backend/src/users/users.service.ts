import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  public async findUsers() {
    return this.prismaService.user.findMany();
  }

  createUser() {
    return this.prismaService.user.create({
      data: {
        name: 'Test' + new Date().toUTCString(),
        email: 'test@test.local',
      },
    });
  }
}
