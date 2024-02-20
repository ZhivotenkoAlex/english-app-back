import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { GrammarExerciseItemVariantEntity } from './exerciseItemVariant.entity';
import { GrammarExerciseEntity } from './grammarExercise.entity';

@ObjectType()
@Entity({
  name: 'grammarItems',
})
export class GrammarExerciseItemEntity {
  @Field(() => ID, { description: 'exercise item id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'Is field for punctuation' })
  @Column()
  isPunctuation: boolean;

  @Field({ description: 'grammar subtitle' })
  @Column()
  title: string;

  @Field({ description: 'grammar id' })
  @ManyToOne(() => GrammarExerciseEntity, (item) => item.exerciseItems)
  exerciseId: number;

  @Field(() => [GrammarExerciseItemVariantEntity], {
    description: 'levelExercises',
  })
  @OneToMany(
    () => GrammarExerciseItemVariantEntity,
    (exerciseItem) => exerciseItem.exerciseId,
    { cascade: true },
  )
  @JoinColumn({ name: 'variants' })
  variants: [GrammarExerciseItemVariantEntity];
}
