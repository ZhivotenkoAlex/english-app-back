import { ObjectType, Field, ID } from '@nestjs/graphql'
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { PracticeEntity } from './practice.entity'
import { VocabularyEntity } from './vocabulary.entity'
import { ExerciseStatus } from '../../types/types'

@ObjectType()
@Entity({
  name: 'lessons',
})
export class LessonEntity {
  @Field(() => ID, { description: 'lesson id' })
  @PrimaryGeneratedColumn()
  id: number

  @Field({ description: 'lesson page slug' })
  @Column()
  slug: string

  @Field({ description: 'lesson topic' })
  @Column()
  topic: string

  @Field({ description: 'lesson image' })
  @Column()
  image: string

  @Field({ description: 'lesson type of done' })
  @Column({
    type: 'enum',
    enum: ExerciseStatus,
    default: ExerciseStatus.NOT_STARTED,
  })
  status: string

  @Field(() => [VocabularyEntity], {
    description: 'vocabularyContent',
  })
  @OneToMany(
    () => VocabularyEntity,
    (vocabularyContent) => vocabularyContent.lesson,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'vocabularyContent' })
  vocabularyContent: [VocabularyEntity]

  @Field(() => [PracticeEntity], {
    description: 'practiceContent',
  })
  @OneToMany(
    () => PracticeEntity,
    (practiceContent) => practiceContent.lesson,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'practiceContent' })
  practiceContent: [PracticeEntity]
}
