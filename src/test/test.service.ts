/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Post } from '@nestjs/common';
import { CreateTestInput } from './dto/create-test.input';
import { UpdateTestInput } from './dto/update-test.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Test } from './entities/test.entity';
import PostEntity from 'src/post/post.entity';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(PostEntity)
    private testRepository: Repository<Test>,
  ) {}

  create(createTestInput: CreateTestInput) {
    return 'This action adds a new test';
  }

  async findAll() {
    return await this.testRepository.createQueryBuilder('posts').getMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} test`;
  }

  update(id: number, updateTestInput: UpdateTestInput) {
    return `This action updates a #${id} test`;
  }

  remove(id: number) {
    return `This action removes a #${id} test`;
  }
}
