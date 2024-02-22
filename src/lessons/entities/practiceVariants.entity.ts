import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { PracticeEntity } from './practice.entity'

@ObjectType({ description: 'practice variants' })
@Entity({
  name: 'practiceVariants',
})
export class PracticeVariantsEntity {
  @Field(() => ID!, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: string

  @Field({ description: 'variant', nullable: true })
  @Column({ name: 'variant', nullable: true })
  variant: string

  @Field({ description: 'practiceItem' })
  @ManyToOne(() => PracticeEntity, (item) => item.variants)
  practiceItem: number
}
