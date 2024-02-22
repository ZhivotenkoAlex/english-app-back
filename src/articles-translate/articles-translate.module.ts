import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ArticlesTranslateResolver } from './articles-translate.resolver'
import { ArticlesTranslateService } from './articles-translate.service'
import { TranslateEntity } from './entities/translate.entity'
import { TranslateItemsEntity } from './entities/translateItems.entity'

@Module({
  providers: [ArticlesTranslateResolver, ArticlesTranslateService],
  imports: [TypeOrmModule.forFeature([TranslateEntity, TranslateItemsEntity])],
})
export class ArticlesTranslateModule {}
