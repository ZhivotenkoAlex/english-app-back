import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateArticlesTranslateInput } from './dto/create-articles-translate.input'
import { TranslateEntity } from './entities/translate.entity'

@Injectable()
export class ArticlesTranslateService {
  constructor(
    @InjectRepository(TranslateEntity)
    private translateRepository: Repository<TranslateEntity>,
  ) {}

  async getTranslateById(id: number) {
    return await this.translateRepository
      .createQueryBuilder('translate')
      .where('translate.id = :id', { id })
      .leftJoinAndSelect('translate.translateItems', 'translateItems')
      .orderBy({ 'translateItems.rate': 'DESC' })
      .getOne()
  }

  async getTranslateByWord(word: string) {
    return await this.translateRepository
      .createQueryBuilder('translate')
      .where('translate.word = :word', { word })
      .leftJoinAndSelect('translate.translateItems', 'translateItems')
      .orderBy({ 'translateItems.rate': 'DESC' })
      .getOne()
  }

  async getAllTranslates() {
    return await this.translateRepository
      .createQueryBuilder('translate')
      .leftJoinAndSelect('translate.translateItems', 'translateItems')
      .orderBy({ 'translateItems.rate': 'DESC' })
      .getMany()
  }

  async createTranslate(data: CreateArticlesTranslateInput) {
    return await this.translateRepository.save(data)
  }
}
