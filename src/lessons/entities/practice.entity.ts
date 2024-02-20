import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql'
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'

import { LessonEntity } from './lesson.entity'
import { PracticeMultiselectEntity } from './multiselect.entity'
import { PracticeVariantsEntity } from './practiceVariants.entity'
import { PracticeTypes } from '../../types/types'

registerEnumType(PracticeTypes, { name: 'PracticeType' })

@ObjectType({ description: 'practice content entity' })
@Entity({
  name: 'practice',
})
export class PracticeEntity {
  @Field(() => ID!, { description: 'id' })
  @PrimaryGeneratedColumn()
  id: string

  @Field({ description: 'type', nullable: true })
  @Column({
    type: 'enum',
    enum: PracticeTypes,
    default: PracticeTypes.CONSTRUCT,
  })
  type: string

  @Field({ description: 'missed', nullable: true })
  @Column({ name: 'missed', nullable: true })
  missed: string

  @Field({ description: 'translation', nullable: true })
  @Column({ name: 'translation', nullable: true })
  translation: string

  @Field({ description: 'title', nullable: true })
  @Column({ name: 'title', nullable: true })
  title: string

  @Field(() => [PracticeVariantsEntity], { description: 'variants' })
  @OneToMany(() => PracticeVariantsEntity, (variant) => variant.practiceItem, {
    cascade: true,
  })
  @JoinColumn({ name: 'variants' })
  variants: [PracticeVariantsEntity]

  @Field({ description: 'placeholder', nullable: true })
  @Column({ name: 'placeholder', nullable: true })
  placeholder: string

  @Field(() => [PracticeMultiselectEntity], { description: 'multiselect' })
  @OneToMany(
    () => PracticeMultiselectEntity,
    (multiselectItem) => multiselectItem.practiceItem,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'multiselect' })
  multiselect: [PracticeMultiselectEntity]

  @Field({ description: 'correctVariant', nullable: true })
  @Column({ name: 'correctVariant', nullable: true })
  correctVariant: string

  @Field({ description: 'hint', nullable: true })
  @Column({ name: 'hint', nullable: true })
  hint: string

  @Field({ description: 'lesson ID' })
  @ManyToOne(() => LessonEntity, (item) => item.vocabularyContent)
  lesson: number
}
