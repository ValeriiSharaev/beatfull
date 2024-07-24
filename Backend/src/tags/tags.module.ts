import { Module } from '@nestjs/common';
import {TagsController} from "./tags.controller";
import {TagsService} from "./tags.service";
import {PrismaService} from "../prisma/prisma.service";

@Module({
    providers: [TagsService, PrismaService],
    controllers: [TagsController],
    exports: [TagsService]
})
export class TagsModule {}
