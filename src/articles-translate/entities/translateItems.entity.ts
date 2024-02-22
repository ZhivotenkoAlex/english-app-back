import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { TranslateEntity } from './translate.entity'

@ObjectType({ description: 'TranslateItems' })
@Entity({
  name: 'translateItems',
})
export class TranslateItemsEntity {
  @Field(() => ID, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: number

  @Field({ description: 'rate' })
  @Column({ name: 'rate', nullable: true })
  rate: number

  @Field({ description: 'translateValue' })
  @Column({ name: 'translateValue' })
  translateValue: string

  @Field({ description: 'sentenceId' })
  @ManyToOne(() => TranslateEntity, (item) => item.translateItems)
  translateItem: number
}
