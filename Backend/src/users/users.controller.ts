import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {Prisma} from "@prisma/client";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {PrismaService} from "../prisma/prisma.service";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}

    @ApiOperation({summary: 'Создание пользователя'})
    @Post('/create')
    async create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto)
    }

    @ApiOperation({summary: 'Получение всех пользователей'})
    @Get('/all')
    async getAllUsers() {
        return this.usersService.getAllUsers()
    }
}
