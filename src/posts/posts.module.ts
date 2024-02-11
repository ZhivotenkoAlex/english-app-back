import { Module } from "@nestjs/common"
import { PostsService } from "./posts.service"
import { PostsController } from "./posts.controller"
import { TypeOrmModule } from "@nestjs/typeorm"
import { PostEntity } from "./posts.entity"

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [TypeOrmModule.forFeature([PostEntity])],
})
export class PostsModule {}
