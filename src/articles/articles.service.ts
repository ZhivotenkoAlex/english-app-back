import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { shuffleArray } from 'src/helpers/shuffleArray'
import { Repository } from 'typeorm'

import { ArticlesEntity } from './entities/articles.entity'
import { ParsedSentencesEntity } from './entities/parsedSentences.entity'

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticlesEntity)
    private articlesRepository: Repository<ArticlesEntity>,
    @InjectRepository(ParsedSentencesEntity)
    private parsedSentences: Repository<ParsedSentencesEntity>,
  ) {}

  async findAllArticles() {
    const data = await this.articlesRepository
      .createQueryBuilder('articles')
      .leftJoinAndSelect('articles.parsedSentences', 'parsedSentences')
      .leftJoinAndSelect('articles.parsedTitle', 'parsedTitle')
      .leftJoinAndSelect('parsedSentences.sentenceItems', 'sentencesItems')
      .leftJoinAndSelect('parsedTitle.titleItems', 'titleItems')
      .orderBy({
        'parsedSentences.order': 'ASC',
        'sentencesItems.order': 'ASC',
        'parsedTitle.order': 'ASC',
        'titleItems.order': 'ASC',
      })
      .getMany()

    return shuffleArray(data)
  }

  async findOne(id: number) {
    return await this.articlesRepository
      .createQueryBuilder('articles')
      .where('articles.id = :id', { id })
      .leftJoinAndSelect('articles.parsedSentences', 'parsedSentences')
      .leftJoinAndSelect('articles.parsedTitle', 'parsedTitle')
      .leftJoinAndSelect('parsedSentences.sentenceItems', 'sentencesItems')
      .leftJoinAndSelect('parsedTitle.titleItems', 'titleItems')
      .orderBy({
        'parsedSentences.order': 'ASC',
        'sentencesItems.order': 'ASC',
        'parsedTitle.order': 'ASC',
        'titleItems.order': 'ASC',
      })
      .getOne()
  }

  async findAllSentences() {
    return await this.parsedSentences.createQueryBuilder('translate').getMany()
  }
}
