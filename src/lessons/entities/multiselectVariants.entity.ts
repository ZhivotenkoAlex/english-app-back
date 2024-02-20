import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

import { PracticeMultiselectEntity } from './multiselect.entity'

@ObjectType({ description: 'multiselectVariants' })
@Entity({
  name: 'multiselectVariants',
})
export class MultiselectVariantsEntity {
  @Field(() => ID!, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: string

  @Field({ description: 'variant', nullable: true })
  @Column({ name: 'variant', nullable: true })
  variant: string

  @Field({ description: 'multiselectItem' })
  @ManyToOne(
    () => PracticeMultiselectEntity,
    (multiselect) => multiselect.variants,
  )
  multiselectItem: number
}
