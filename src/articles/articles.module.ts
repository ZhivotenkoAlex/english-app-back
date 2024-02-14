import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ArticlesResolver } from './articles.resolver'
import { ArticlesService } from './articles.service'
import { ArticlesEntity } from './entities/articles.entity'
import { ParsedSentencesEntity } from './entities/parsedSentences.entity'
import { ParsedTitleEntity } from './entities/parsedTitle.entity'
import { SentencesItemsEntity } from './entities/sentencesItems.entity'
import { TitleItemsEntity } from './entities/titleItems.entity'

@Module({
  providers: [ArticlesResolver, ArticlesService],
  imports: [
    TypeOrmModule.forFeature([
      ArticlesEntity,
      ParsedSentencesEntity,
      ParsedTitleEntity,
      SentencesItemsEntity,
      TitleItemsEntity,
    ]),
  ],
})
export class ArticlesModule {}
