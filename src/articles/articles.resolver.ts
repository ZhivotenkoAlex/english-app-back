import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { ArticlesService } from './articles.service';
import { ArticlesEntity } from './entities/articles.entity';
import { ParsedSentencesEntity } from './entities/parsedSentences.entity';

// import { CreateArticleInput } from './dto/create-article.input';
// import { UpdateArticleInput } from './dto/update-article.input';

@Resolver(() => ArticlesEntity)
export class ArticlesResolver {
  constructor(private readonly articlesService: ArticlesService) {}

  @Query(() => [ArticlesEntity], {
    name: 'getArticles',
  })
  findAll() {
    return this.articlesService.findAllArticles();
  }

  @Query(() => ArticlesEntity, {
    name: 'getArticleById',
  })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.articlesService.findOne(id);
  }

  @Query(() => [ParsedSentencesEntity], {
    name: 'getSentences',
  })
  findAllSentences() {
    return this.articlesService.findAllSentences();
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
