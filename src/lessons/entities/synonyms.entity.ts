import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { VocabularyEntity } from './vocabulary.entity'

@ObjectType({ description: 'synonyms' })
@Entity({
  name: 'synonyms',
})
export class SynonymsEntity {
  @Field(() => ID!, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: string

  @Field({ description: 'synonym', nullable: true })
  @Column({ name: 'translation', nullable: true })
  synonym: string

  @Field({ description: 'vocabularyItemId' })
  @ManyToOne(() => VocabularyEntity, (item) => item.synonyms)
  vocabularyItem: number
}
