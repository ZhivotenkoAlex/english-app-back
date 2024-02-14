import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { GraphQlModule } from './graphql/graphql.module';
import { ConfigAppModule } from './config/config.module';
import { ArticlesModule } from './articles/articles.module';

@Module({
  imports: [ConfigAppModule, GraphQlModule, DatabaseModule, ArticlesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
