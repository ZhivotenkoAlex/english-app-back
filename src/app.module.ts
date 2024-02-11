import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { TestModule } from './test/test.module';
import { GraphQlModule } from './graphql/graphql.module';
import { ConfigAppModule } from './config/config.module';

@Module({
  imports: [
    ConfigAppModule,
    GraphQlModule,
    DatabaseModule,
    PostModule,
    UserModule,
    TestModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
