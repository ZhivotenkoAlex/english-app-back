import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateRuleInput } from './dto/create-rule.input';
import { RuleEntity } from './entities/rule.entity';

@Injectable()
export class RulesService {
  constructor(
    @InjectRepository(RuleEntity)
    private ruleEntity: Repository<RuleEntity>,
  ) {}

  create(createRuleInput: CreateRuleInput) {
    return this.ruleEntity.save(createRuleInput);
  }

  findAll() {
    return this.ruleEntity
      .createQueryBuilder('rules')
      .leftJoinAndSelect('rules.data', 'rulesData')
      .leftJoinAndSelect('rulesData.examples', 'rulesExamples')
      .getMany();
  }

  findOne(id: number) {
    return this.ruleEntity
      .createQueryBuilder('rules')
      .where('rules.id = :id', { id })
      .leftJoinAndSelect('rules.data', 'rulesData')
      .leftJoinAndSelect('rulesData.examples', 'rulesExamples')
      .getOne();
  }
}
