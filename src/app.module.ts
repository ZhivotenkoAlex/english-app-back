import { Module } from '@nestjs/common'

import { ArticlesModule } from './articles/articles.module'
import { ConfigAppModule } from './config/config.module'
import { DatabaseModule } from './database/database.module'
import { GraphQlModule } from './graphql/graphql.module'

@Module({
  imports: [ConfigAppModule, GraphQlModule, DatabaseModule, ArticlesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
