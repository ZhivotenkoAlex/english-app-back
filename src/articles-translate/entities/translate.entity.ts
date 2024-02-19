import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { TranslateItemsEntity } from './translateItems.entity'

@ObjectType({ description: 'Translate' })
@Entity({
  name: 'translate',
})
export class TranslateEntity {
  @Field(() => ID, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: number

  @Field({ description: 'word' })
  @Column({ name: 'word' })
  word: string

  @Field(() => [TranslateItemsEntity], { description: 'translateItems' })
  @OneToMany(() => TranslateItemsEntity, (titleItems) => titleItems.translateItem, {
    cascade: true,
  })
  @JoinColumn({ name: 'translateItems' })
  translateItems: [TranslateItemsEntity]
}
