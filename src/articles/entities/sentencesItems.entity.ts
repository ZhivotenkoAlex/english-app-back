import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { ParsedSentencesEntity } from './parsedSentences.entity'

@ObjectType({ description: 'SentencesItems' })
@Entity({
  name: 'sentencesItems',
})
export class SentencesItemsEntity {
  @Field(() => ID, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: number

  @Field({ description: 'w' })
  @Column({ name: 'w', default: ' ' })
  w: string

  @Field()
  @Column()
  order: number

  @Field({ description: 'sentenceId' })
  @ManyToOne(() => ParsedSentencesEntity, (item) => item.sentenceItems)
  sentenceItem: number
}
