import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { GrammarExerciseItemEntity } from './exerciseItem.entity';

@ObjectType()
@Entity({
  name: 'grammarVariants',
})
export class GrammarExerciseItemVariantEntity {
  @Field(() => ID, { description: 'variant id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'variant' })
  @Column()
  variant: string;

  @Field({ description: 'grammar exercise item id' })
  @ManyToOne(() => GrammarExerciseItemEntity, (item) => item.variants)
  exerciseId: number;
}
