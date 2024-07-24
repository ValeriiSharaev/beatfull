import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import {ConfigModule} from "@nestjs/config";
import { TagsService } from './tags/tags.service';
import { TagsController } from './tags/tags.controller';
import { TagsModule } from './tags/tags.module';
import { GenresModule } from './genres/genres.module';
import { PostsModule } from './posts/posts.module';


@Module({
    controllers: [AppController, TagsController],
    providers: [AppService, TagsService],
    exports: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env'
        }),
        UsersModule, PrismaModule, TagsModule, GenresModule, PostsModule]
})

export class AppModule {}