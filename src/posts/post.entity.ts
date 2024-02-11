import { BaseEntity } from 'src/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({
  name: 'posts',
})
export class PostEntity extends BaseEntity {
  @Column()
  id: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  content: string;

  @Column()
  author: string;
}
