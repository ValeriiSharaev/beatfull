import { Module } from '@nestjs/common';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';
import {PrismaService} from "../prisma/prisma.service";

@Module({
  controllers: [GenresController],
  providers: [GenresService, PrismaService],
  exports: [GenresService]
})
export class GenresModule {}
