import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {TagsService} from "../tags/tags.service";

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService, private tagsService: TagsService) {}

    async createUser(createUserDto: CreateUserDto ){
        return this.prisma.user.create({
            data: createUserDto
        });
    }

    async getAllUsers(){
        return this.prisma.user.findMany()
    }
}
