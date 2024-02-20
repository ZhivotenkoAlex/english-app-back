import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RuleEntity } from './entities/rule.entity';
import { RuleDataEntity } from './entities/ruleData.entity';
import { RuleExamplesEntity } from './entities/ruleExamples.entity';
import { RulesResolver } from './rules.resolver';
import { RulesService } from './rules.service';

@Module({
  providers: [RulesResolver, RulesService],
  imports: [
    TypeOrmModule.forFeature([RuleEntity, RuleDataEntity, RuleExamplesEntity]),
  ],
})
export class RulesModule {}
