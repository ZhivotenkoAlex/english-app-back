import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { GrammarExerciseItemEntity } from './exerciseItem.entity';
import { GrammarEntity } from './grammar.entity';

@ObjectType()
@Entity({
  name: 'grammarExercises',
})
export class GrammarExerciseEntity {
  @Field(() => ID, { description: 'exercise id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'grammar title' })
  @Column()
  title: string;

  @Field({ description: 'grammar subtitle' })
  @Column()
  translation: string;

  @Field({ description: 'grammar id' })
  @ManyToOne(() => GrammarEntity, (item) => item.exercises)
  grammarId: number;

  @Field(() => [GrammarExerciseItemEntity], { description: 'levelExercises' })
  @OneToMany(
    () => GrammarExerciseItemEntity,
    (exerciseItem) => exerciseItem.exerciseId,
    { cascade: true },
  )
  @JoinColumn({ name: 'exerciseItems' })
  exerciseItems: [GrammarExerciseItemEntity];
}
