import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {TagsService} from "../tags/tags.service";
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {CreateTagDto} from "../tags/dto/create-tag.dto";
import {GenresService} from "./genres.service";

@ApiTags('Жанры')
@Controller('genres')
export class GenresController {
    constructor(private genresService: GenresService) {}

    @ApiOperation({summary: 'Создание жанра'})
    @Post('/create')
    async create(@Body() createTagDto: CreateTagDto) {
        return this.genresService.createGenre(createTagDto)
    }

    @ApiOperation({summary: 'Верификация жанра'})
    @Patch('/verify/:genreId')
    async verifyTag(@Param() genreId: number) {
        return this.genresService.verifyGenre(genreId)
    }

    @ApiOperation({summary: 'Отклонение верификации жанра'})
    @Patch('/unverify/:genreId')
    async unVerifyTag(@Param() genreId: number) {
        return this.genresService.unVerifyGenre(genreId)
    }

    @ApiOperation({summary: 'Получение новых жанров'})
    @Get('/newTags')
    async findNewTags() {
        return this.genresService.findNewGenres()
    }

    @ApiOperation({summary: 'Получение верифицированных жанров'})
    @Get('/verifiedTags')
    async findVerifiedTags() {
        return this.genresService.findVerifiedGenres()
    }
}
