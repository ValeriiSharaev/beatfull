import {Body, Controller, Get, Param, Patch, Post} from '@nestjs/common';
import {ApiOperation, ApiTags} from "@nestjs/swagger";
import {UsersService} from "../users/users.service";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {TagsService} from "./tags.service";
import {CreateTagDto} from "./dto/create-tag.dto";

@ApiTags('Тэги')
@Controller('tags')
export class TagsController {
    constructor(private tagsService: TagsService) {}

    @ApiOperation({summary: 'Создание тэга'})
    @Post('/create')
    async create(@Body() createTagDto: CreateTagDto) {
        return this.tagsService.createTag(createTagDto)
    }

    @ApiOperation({summary: 'Верификация тэга'})
    @Patch('/verify/:tagId')
    async verifyTag(@Param() tagId: number) {
        return this.tagsService.verifyTag(tagId)
    }

    @ApiOperation({summary: 'Отклонение верификации тэга'})
    @Patch('/unverify/:tagId')
    async unVerifyTag(@Param() tagId: number) {
        return this.tagsService.unVerifyTag(tagId)
    }

    @ApiOperation({summary: 'Получение новых тэгов'})
    @Get('/newTags')
    async findNewTags() {
        return this.tagsService.findNewTags()
    }

    @ApiOperation({summary: 'Получение верифицированных тэгов'})
    @Get('/verifiedTags')
    async findVerifiedTags() {
        return this.tagsService.findVerifiedTags()
    }
}
