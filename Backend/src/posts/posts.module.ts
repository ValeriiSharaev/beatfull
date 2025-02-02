import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import {PrismaService} from "../prisma/prisma.service";
import {GenresModule} from "../genres/genres.module";

@Module({
  controllers: [PostsController],
  providers: [PostsService, PrismaService],
  imports: [GenresModule]
})
export class PostsModule {}
