import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';

import { CreateGrammarInput } from './dto/create-grammar.input';
import { UpdateGrammarStatusInput } from './dto/update-grammar-status.input';
import { GrammarEntity } from './entities/grammar.entity';
import { GrammarLevelsEntity } from './entities/grammarLevels.entity';
import { GrammarService } from './grammar.service';

@Resolver(() => GrammarEntity)
export class GrammarResolver {
  constructor(private readonly grammarService: GrammarService) {}

  @Mutation(() => GrammarLevelsEntity)
  createGrammar(@Args('input') createGrammarInput: CreateGrammarInput) {
    return this.grammarService.create(createGrammarInput);
  }

  @Query(() => [GrammarLevelsEntity], { name: 'getAllGrammars' })
  findAll() {
    return this.grammarService.findAll();
  }

  @Query(() => GrammarLevelsEntity, { name: 'grammar' })
  findOneById(@Args('id', { type: () => Int }) id: number) {
    return this.grammarService.findOne(id);
  }

  @Query(() => GrammarEntity, { name: 'getGrammarBySlug' })
  findOneBySlug(@Args('slug') slug: string) {
    return this.grammarService.findOneBySlug(slug);
  }

  @Mutation(() => GrammarLevelsEntity)
  updateGrammarStatus(@Args('input') data: UpdateGrammarStatusInput) {
    return this.grammarService.updateStatus(data);
  }

  @Mutation(() => GrammarLevelsEntity)
  updateGrammar(@Args('input') data: CreateGrammarInput) {
    return this.grammarService.update(data);
  }

  @Mutation(() => GrammarEntity)
  removeGrammar(@Args('id', { type: () => Int }) id: number) {
    return this.grammarService.remove(id);
  }
}
