import { ObjectType, Field, ID } from '@nestjs/graphql'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { MultiselectVariantsEntity } from './multiselectVariants.entity'
import { PracticeEntity } from './practice.entity'

@ObjectType({ description: 'PracticeMultiselect' })
@Entity({
  name: 'practiceMultiselect',
})
export class PracticeMultiselectEntity {
  @Field(() => ID!, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: string

  @Field({ description: 'correctVariant', nullable: true })
  @Column({ name: 'correctVariant', nullable: true })
  correctVariant: string

  @Field({ description: 'practiceItem' })
  @ManyToOne(() => PracticeEntity, (item) => item.variants)
  practiceItem: number

  @Field(() => [MultiselectVariantsEntity], { description: 'variants' })
  @OneToMany(
    () => MultiselectVariantsEntity,
    (variant) => variant.multiselectItem,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'variants' })
  variants: [MultiselectVariantsEntity]
}
