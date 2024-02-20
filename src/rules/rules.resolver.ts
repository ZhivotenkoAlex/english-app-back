import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { CreateRuleInput } from './dto/create-rule.input';
import { RuleEntity } from './entities/rule.entity';
import { RulesService } from './rules.service';

@Resolver(() => RuleEntity)
export class RulesResolver {
  constructor(private readonly rulesService: RulesService) {}

  @Mutation(() => RuleEntity)
  createRule(@Args('input') createRuleInput: CreateRuleInput) {
    return this.rulesService.create(createRuleInput);
  }

  @Query(() => [RuleEntity], { name: 'getAllRules' })
  findAll() {
    return this.rulesService.findAll();
  }

  @Query(() => RuleEntity, { name: 'getRule' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.rulesService.findOne(id);
  }
}
