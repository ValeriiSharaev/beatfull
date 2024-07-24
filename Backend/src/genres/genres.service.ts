import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateGenreDto} from "./dto/create-genre.dto";

@Injectable()
export class GenresService {
    constructor(private prisma: PrismaService) {}

    async createGenre(createGenreDto: CreateGenreDto){
        return this.prisma.genre.create({
            data: createGenreDto
        })
    }

    async verifyGenre(genreId: number){
        const genre = await this.prisma.genre.update({
            where: { id: Number(genreId)},
            data: {isVerified: true}
        })
        return "Жанр верифицирован!"
    }

    async unVerifyGenre(genreId: number){
        const genre =  await this.prisma.genre.update({
            where: { id:  Number(genreId)},
            data: {isVerified: false}
        })
        return "Верификация жанра отклонена!"
    }

    async findNewGenres() {
        return this.prisma.genre.findMany({
            where:
                {isVerified: null}
        })
    }

    async findVerifiedGenres(){
        return this.prisma.genre.findMany({
            where:
                {isVerified: true}
        })
    }
}
