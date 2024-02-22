import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { RuleEntity } from './rule.entity';
import { RuleExamplesEntity } from './ruleExamples.entity';

@ObjectType()
@Entity({
  name: 'rulesData',
})
export class RuleDataEntity {
  @Field(() => ID, { description: 'group id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'data rule code' })
  @Column()
  code: string;

  @Field({ description: 'rule description' })
  @Column()
  description: string;

  @Field({ description: 'rule description' })
  @Column()
  title: string;

  @Field({ description: 'rule id' })
  @ManyToOne(() => RuleEntity, (item) => item.data)
  ruleId: string;

  @Field(() => [RuleExamplesEntity], { description: 'examples for rules' })
  @OneToMany(
    () => RuleExamplesEntity,
    (exerciseItems) => exerciseItems.ruleId,
    {
      cascade: true,
    },
  )
  @JoinColumn({ name: 'exercises' })
  examples: [RuleExamplesEntity];
}
