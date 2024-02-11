import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { TestResolver } from './test.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Test } from './entities/test.entity';
import PostEntity from 'src/post/post.entity';

@Module({
  providers: [TestResolver, TestService],
  imports: [TypeOrmModule.forFeature([PostEntity])],
})
export class TestModule {}
