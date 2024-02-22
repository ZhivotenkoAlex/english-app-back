import { ObjectType, Field, ID } from '@nestjs/graphql'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { LessonEntity } from './lesson.entity'
import { SynonymsEntity } from './synonyms.entity'

@ObjectType({ description: 'vocabulary content entity' })
@Entity({
  name: 'vocabulary',
})
export class VocabularyEntity {
  @Field(() => ID!, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: string

  @Field({ description: 'translation', nullable: true })
  @Column({ name: 'translation', nullable: true })
  translation: string

  @Field({ description: 'title', nullable: true })
  @Column({ name: 'title', nullable: true })
  title: string

  @Field({ description: 'transcription', nullable: true })
  @Column({ name: 'transcription', nullable: true })
  transcription: string

  @Field({ description: 'definition', nullable: true })
  @Column({ name: 'definition', nullable: true })
  definition: string

  @Field({ description: 'example', nullable: true })
  @Column({ name: 'example', nullable: true })
  example: string

  @Field()
  @Column()
  order: number

  @Field({ description: 'lesson ID' })
  @ManyToOne(() => LessonEntity, (item) => item.vocabularyContent)
  lesson: number

  @Field(() => [SynonymsEntity], { description: 'synonyms' })
  @OneToMany(
    () => SynonymsEntity,
    (synonymItem) => synonymItem.vocabularyItem,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'synonyms' })
  synonyms: [SynonymsEntity]
}
