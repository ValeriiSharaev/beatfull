import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreatePostDto} from "./dto/create-post.dto";
import {GenresService} from "../genres/genres.service";

@Injectable()
export class PostsService {
    constructor(private prisma: PrismaService, private genresService: GenresService) {
    }

    async createPost(createPostDto: CreatePostDto){
        return this.prisma.post.create({
            data: createPostDto
        })
    }

}
