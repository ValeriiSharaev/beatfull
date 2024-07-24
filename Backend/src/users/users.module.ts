import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {PrismaService} from "../prisma/prisma.service";
import {TagsService} from "../tags/tags.service";

@Module({
  providers: [UsersService, PrismaService, TagsService],
  controllers: [UsersController],
  imports: []
})
export class UsersModule {}
