import {Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateTagDto} from "./dto/create-tag.dto";

@Injectable()
export class TagsService {
    constructor(private prisma: PrismaService) {
    }

    async createTag(createTagDto: CreateTagDto){
        return this.prisma.tag.create({data: createTagDto});
    }

    async verifyTag(tagId: number){
        const tag = await this.prisma.tag.update({
            where: { id: Number(tagId)},
            data: {isVerified: true}
        })
        return "успешно!"
    }

    async unVerifyTag(tagId: number){
        this.prisma.tag.update({
            where: { id:  Number(tagId)},
            data: {isVerified: false}
        })
    }

    async findNewTags() {
            return this.prisma.tag.findMany({
                where:
                    {isVerified: null}
            })
    }

    async findVerifiedTags(){
        return this.prisma.tag.findMany({
            where:
                {isVerified: true}
        })
    }
}
