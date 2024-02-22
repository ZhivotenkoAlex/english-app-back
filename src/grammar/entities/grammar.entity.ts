import { ObjectType, Field, ID, registerEnumType } from '@nestjs/graphql'
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

import { GrammarExerciseEntity } from './grammarExercise.entity'
import { GrammarLevelsEntity } from './grammarLevels.entity'
import { ExerciseStatus } from '../../types/types'

registerEnumType(ExerciseStatus, { name: 'ExerciseStatus' })

@ObjectType()
@Entity({
  name: 'grammar',
})
export class GrammarEntity {
  @Field(() => ID, { description: 'grammar id' })
  @PrimaryGeneratedColumn()
  id: number

  @Field({ description: 'grammar type of done' })
  @Column({
    type: 'enum',
    enum: ExerciseStatus,
    default: ExerciseStatus.NOT_STARTED,
  })
  status: string

  @Field({ description: 'grammar title' })
  @Column()
  title: string

  @Field({ description: 'grammar subtitle' })
  @Column()
  subtitle: string

  @Field({ description: 'grammar icon' })
  @Column()
  icon: string

  @Field({ description: 'grammar slug' })
  @Column()
  slug: string

  @Field({ description: 'grammar level id' })
  @ManyToOne(() => GrammarLevelsEntity, (item) => item.level, {
    onDelete: 'CASCADE',
  })
  level: string

  @Field(() => [GrammarExerciseEntity], { description: 'exerciseItems' })
  @OneToMany(() => GrammarExerciseEntity, (exerciseItems) => exerciseItems.grammarId, {
    cascade: true,
  })
  @JoinColumn({ name: 'exercises' })
  exercises: [GrammarExerciseEntity]
}
