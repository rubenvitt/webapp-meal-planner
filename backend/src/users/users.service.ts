import { Injectable } from '@nestjs/common';
import { PrismaService } from '../data/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  public async findUsers() {
    return this.prismaService.user.findMany({
      take: 2,
      include: {
        _count: true,
      },
    });
  }

  createUser() {
    return this.prismaService.user.create({
      data: {
        name: 'Test' + new Date().toUTCString(),
        email: 'test' + new Date().getUTCMilliseconds() + '@test.local',
        Groups: {
          create: {
            name: 'Group for Test' + new Date().toUTCString(),
          },
        },
      },
      include: {
        Groups: {
          take: 2,
        },
        _count: true,
      },
    });
  }
}
