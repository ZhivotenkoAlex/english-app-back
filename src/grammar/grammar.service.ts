import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateGrammarInput } from './dto/create-grammar.input';
import { UpdateGrammarStatusInput } from './dto/update-grammar-status.input';
import { GrammarEntity } from './entities/grammar.entity';
import { GrammarLevelsEntity } from './entities/grammarLevels.entity';

@Injectable()
export class GrammarService {
  constructor(
    @InjectRepository(GrammarLevelsEntity)
    private grammarLevelEntity: Repository<GrammarLevelsEntity>,
    @InjectRepository(GrammarEntity)
    private grammarEntity: Repository<GrammarEntity>,
  ) {}
  async create(createGrammarInput: CreateGrammarInput) {
    return await this.grammarLevelEntity.save(createGrammarInput);
  }

  async findAll() {
    return await this.grammarLevelEntity
      .createQueryBuilder('grammarLevel')
      .leftJoinAndSelect('grammarLevel.levelExercises', 'grammar')
      .leftJoinAndSelect('grammar.exercises', 'grammarExercises')
      .leftJoinAndSelect('grammarExercises.exerciseItems', 'grammarItems')
      .leftJoinAndSelect('grammarItems.variants', 'grammarVariants')
      .getMany();
  }

  async findOne(id: number) {
    return await this.grammarLevelEntity
      .createQueryBuilder('grammarLevel')
      .where('grammarLevel.id = :id', { id })
      .leftJoinAndSelect('grammarLevel.levelExercises', 'grammar')
      .leftJoinAndSelect('grammar.exercises', 'grammarExercises')
      .leftJoinAndSelect('grammarExercises.exerciseItems', 'grammarItems')
      .leftJoinAndSelect('grammarItems.variants', 'grammarVariants')
      .getOne();
  }

  async updateStatus(data: UpdateGrammarStatusInput) {
    const id = data.id;
    await this.grammarEntity.update(id, data);
    return this.grammarEntity.findOneBy({ id });
  }

  remove(id: number) {
    return `This action removes a #${id} grammar`;
  }
}
