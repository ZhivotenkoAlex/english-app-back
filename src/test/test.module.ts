import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
// import { Test } from './entities/test.entity';
import PostEntity from 'src/post/post.entity'

import { TestResolver } from './test.resolver'
import { TestService } from './test.service'

@Module({
  providers: [TestResolver, TestService],
  imports: [TypeOrmModule.forFeature([PostEntity])],
})
export class TestModule {}
