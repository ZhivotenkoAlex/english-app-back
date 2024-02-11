import { BaseEntity } from 'src/base.entity';
export declare class PostEntity extends BaseEntity {
    id: number;
    name: string;
    type: string;
    content: string;
    author: string;
}
