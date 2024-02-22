import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { RuleDataEntity } from './ruleData.entity';

@ObjectType()
@Entity({
  name: 'rulesExamples',
})
export class RuleExamplesEntity {
  @Field(() => ID, { description: 'group id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  spelling: string;

  @Field()
  @Column()
  translation: string;

  @Field({ description: 'rule id' })
  @ManyToOne(() => RuleDataEntity, (item) => item.examples)
  ruleId: string;
}
