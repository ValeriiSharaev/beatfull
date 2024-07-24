import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto{
    @ApiProperty()
    email: string

    @ApiProperty()
    hashedPassword: string

    @ApiProperty()
    name:  string

    @ApiProperty({ required: false })
    description: string

    @ApiProperty({ required: false })
    avatar: string
}