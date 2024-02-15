import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { ParsedSentencesEntity } from './parsedSentences.entity';
import { ParsedTitleEntity } from './parsedTitle.entity';
import { ExerciseStatus } from '../../types/articles';

registerEnumType(ExerciseStatus, { name: 'ExerciseStatus' });

@ObjectType({ description: 'Articles' })
@Entity({
  name: 'articles',
})
export class ArticlesEntity {
  @Field(() => ID, { description: 'article id' })
  @PrimaryGeneratedColumn()
  id: string;

  @Field({ description: 'article type of done' })
  @Column({
    type: 'enum',
    enum: ExerciseStatus,
    default: ExerciseStatus.NOT_STARTED,
  })
  status: string;

  @Field({ description: 'article image' })
  @Column()
  image: string;

  @Field({ description: 'article page slug' })
  @Column()
  slug: string;

  @Field({ description: 'article title' })
  @Column({ name: 'title' })
  title: string;

  @Field(() => [ParsedSentencesEntity], { description: 'parsedSentences' })
  @OneToMany(
    () => ParsedSentencesEntity,
    (parsedSentences) => parsedSentences.sentence,
  )
  @JoinColumn({ name: 'parsedSentences' })
  parsedSentences: [ParsedSentencesEntity];

  @Field(() => [ParsedTitleEntity], { description: 'parsedTitle' })
  @OneToMany(() => ParsedTitleEntity, (parsedTitle) => parsedTitle.sentence)
  @JoinColumn({ name: 'parsedTitle' })
  parsedTitle: [ParsedTitleEntity];
}
