import { ObjectType, Field, ID } from '@nestjs/graphql';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { RuleDataEntity } from './ruleData.entity';

@ObjectType()
@Entity({
  name: 'rules',
})
export class RuleEntity {
  @Field(() => ID, { description: 'group id' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'rule code' })
  @Column()
  code: string;

  @Field({ description: 'rule code' })
  @Column()
  slug: string;

  @Field(() => [RuleDataEntity], { description: 'rules data' })
  @OneToMany(() => RuleDataEntity, (data) => data.ruleId, {
    cascade: true,
  })
  @JoinColumn({ name: 'data' })
  data: [RuleDataEntity];
}
