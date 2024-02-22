import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql'

import { ArticlesService } from './articles.service'
import { UpdateArticlesStatusInput } from './dto/update-articles-status.input'
import { ArticlesEntity } from './entities/articles.entity'
import { ParsedSentencesEntity } from './entities/parsedSentences.entity'

@Resolver(() => ArticlesEntity)
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Query(() => [ArticlesEntity], {
    name: 'getArticles',
  })
  findAll() {
    return this.articlesService.findAllArticles()
  }

  @Query(() => ArticlesEntity, {
    name: 'getArticleById',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.articlesService.findOne(id)
  }

  @Query(() => [ParsedSentencesEntity], {
    name: 'getSentences',
  })
  findAllSentences() {
    return this.articlesService.findAllSentences()
  }

  @Mutation(() => ArticlesEntity, {
    name: 'updateArticleStatus',
  })
  updateArticle(@Args('input') data: UpdateArticlesStatusInput) {
    return this.articlesService.updateArticleStatus(data)
  }
}
