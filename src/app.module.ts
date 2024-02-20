import { Module } from '@nestjs/common';

import { ArticlesModule } from './articles/articles.module';
import { ConfigAppModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { GrammarModule } from './grammar/grammar.module';
import { GraphQlModule } from './graphql/graphql.module';
import { RulesModule } from './rules/rules.module';

@Module({
  imports: [
    ConfigAppModule,
    GraphQlModule,
    DatabaseModule,
    ArticlesModule,
    GrammarModule,
    RulesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
