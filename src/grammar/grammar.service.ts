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
    return await this.grammarEntity.save(createGrammarInput);
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

  async findOneBySlug(slug: string) {
    return await this.grammarEntity
      .createQueryBuilder('grammar')
      .where('grammar.slug = :slug', { slug })
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

  async remove(id: number) {
    await this.grammarEntity.delete(id);
    return { id: id };
  }

  async update(data: CreateGrammarInput) {
    const { level } = data;

    const grammar = await await this.grammarLevelEntity
      .createQueryBuilder('grammarLevel')
      .where('grammarLevel.level = :level', { level })
      .leftJoinAndSelect('grammarLevel.levelExercises', 'grammar')
      .leftJoinAndSelect('grammar.exercises', 'grammarExercises')
      .leftJoinAndSelect('grammarExercises.exerciseItems', 'grammarItems')
      .leftJoinAndSelect('grammarItems.variants', 'grammarVariants')
      .getOne();

    const updatedGrammar = {
      ...grammar,
      levelExercises: [...grammar.levelExercises, ...data.levelExercises],
    };

    await this.grammarLevelEntity.save(updatedGrammar);
    return await this.findOne(grammar.id);
  }
}
