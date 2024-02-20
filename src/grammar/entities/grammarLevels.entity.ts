import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { GrammarEntity } from './grammar.entity';

@ObjectType()
@Entity({
  name: 'grammarLevels',
})
export class GrammarLevelsEntity {
  @Field(() => ID, { description: 'group id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'article page slug' })
  @Column()
  level: string;

  @Field(() => [GrammarEntity], { description: 'exercises' })
  @OneToMany(() => GrammarEntity, (levelExercises) => levelExercises.level, {
    cascade: true,
  })
  @JoinColumn({ name: 'exercises' })
  levelExercises: [GrammarEntity];
}
