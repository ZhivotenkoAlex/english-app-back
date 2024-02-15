import { ObjectType, Field, ID } from '@nestjs/graphql'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { ArticlesEntity } from './articles.entity'
import { SentencesItemsEntity } from './sentencesItems.entity'

@ObjectType({ description: 'ParsedSentences' })
@Entity({
  name: 'parsedSentences',
})
export class ParsedSentencesEntity {
  @Field(() => ID!, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: string

  @Field({ description: 'text', nullable: true })
  @Column({ name: 'text', nullable: true })
  text: string

  @Field({ description: 't', nullable: true })
  @Column({ name: 't', nullable: true })
  t: string

  @Field({ description: 'articleId' })
  @ManyToOne(() => ArticlesEntity, (item) => item.parsedSentences)
  sentence: number

  @Field(() => [SentencesItemsEntity], { description: 'sentenceItems' })
  @OneToMany(
    () => SentencesItemsEntity,
    (sentencesItems) => sentencesItems.sentenceItem,
  )
  @JoinColumn({ name: 'sentenceItems' })
  sentenceItems: [SentencesItemsEntity]

  @Field()
  @Column()
  order: number
}
