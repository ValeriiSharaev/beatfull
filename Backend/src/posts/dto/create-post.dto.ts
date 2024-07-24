import {ApiProperty} from "@nestjs/swagger";
import {Beat, Genre, Photo, User} from "@prisma/client";

export class CreatePostDto{

    @ApiProperty()
    title: string

    @ApiProperty()
    beat: Beat

    @ApiProperty()
    user: User

    @ApiProperty()
    genre: Genre

    @ApiProperty()
    photo: Photo
}