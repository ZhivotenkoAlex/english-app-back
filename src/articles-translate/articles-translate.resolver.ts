import { Resolver, Query, Args, Int } from '@nestjs/graphql'

import { ArticlesTranslateService } from './articles-translate.service'
import { TranslateEntity } from './entities/translate.entity'

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

  // @Mutation(() => ArticlesEntity)
  // updateArticle(
  //   @Args('updateArticleInput') updateArticleInput: UpdateArticleInput,
  // ) {
  //   return this.articlesService.update(
  //     updateArticleInput.id,
  //     updateArticleInput,
  //   );
  // }

  // @Mutation(() => ArticlesEntity)
  // removeArticle(@Args('id', { type: () => Int }) id: number) {
  //   return this.articlesService.remove(id);
  // }
}
