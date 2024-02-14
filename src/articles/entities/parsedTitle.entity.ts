import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TitleItemsEntity } from './titleItems.entity';
import { ArticlesEntity } from './articles.entity';

@ObjectType({ description: 'ParsedTitle' })
@Entity({
  name: 'parsedTitle',
})
export class ParsedTitleEntity {
  @Field(() => ID, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'text' })
  @Column({ name: 'text' })
  text: string;

  @Field({ description: 'articleId' })
  @ManyToOne(() => ArticlesEntity, (item) => item.parsedSentences)
  sentence: number;

  @Field(() => [TitleItemsEntity], { description: 'titleItems' })
  @OneToMany(() => TitleItemsEntity, (titleItems) => titleItems.titleItem)
  @JoinColumn({ name: 'titleItems' })
  titleItems: [TitleItemsEntity];

  @Field()
  @Column()
  order: number;
}
