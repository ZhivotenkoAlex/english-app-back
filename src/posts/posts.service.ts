import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { PostEntity } from "./posts.entity"
import { Repository } from "typeorm"

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>
  ) {}

  async fetchPosts() {
    return await this.postRepository.findOneBy({ id: 1 })
  }
}
