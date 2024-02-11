import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';
export declare class PostsService {
    private postRepository;
    constructor(postRepository: Repository<PostEntity>);
    fetchPosts(): Promise<PostEntity>;
}
