import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql'

import { ArticlesTranslateService } from './articles-translate.service'
import { TranslateEntity } from './entities/translate.entity'
import { CreateArticlesTranslateInput } from './dto/create-articles-translate.input'

@Resolver(() => TranslateEntity)
export class ArticlesTranslateResolver {
  constructor(private readonly translateService: ArticlesTranslateService) {}

  @Query(() => TranslateEntity, {
    name: 'getTranslateById',
  })
  getTranslateById(@Args('id', { type: () => Int }) id: number) {
    return this.translateService.getTranslateById(id)
  }

  @Query(() => TranslateEntity, {
    name: 'getTranslateByWord',
  })
  getTranslateByWord(@Args('word', { type: () => String }) word: string) {
    return this.translateService.getTranslateByWord(word)
  }

  @Query(() => [TranslateEntity], {
    name: 'getTranslates',
  })
  getTranslates() {
    return this.translateService.getAllTranslates()
  }

  @Mutation(() => TranslateEntity)
  async create(@Args('input') createArticleInput: CreateArticlesTranslateInput) {
    return this.translateService.createTranslate(createArticleInput)
  }
}
