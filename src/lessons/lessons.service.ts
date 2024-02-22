import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { CreateLessonInput } from './dto/create-lesson.input'
import { UpdateLessonStatusInput } from './dto/update-lesson-status.input'
import { LessonEntity } from './entities/lesson.entity'


@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(LessonEntity)
    private lessonEntity: Repository<LessonEntity>,
  ) {}

  async findAll() {
    return await this.lessonEntity
      .createQueryBuilder('lesson')
      .leftJoinAndSelect('lesson.vocabularyContent', 'vocabulary')
      .leftJoinAndSelect('vocabulary.synonyms', 'synonyms')
      .leftJoinAndSelect('lesson.practiceContent', 'practice')
      .leftJoinAndSelect('practice.variants', 'practiceVariants')
      .leftJoinAndSelect('practice.multiselect', 'practiceMultiselect')
      .leftJoinAndSelect('practiceMultiselect.variants', 'multiselectVariants')
      .getMany()
  }

  async findOne(id: number) {
    return await this.lessonEntity
      .createQueryBuilder('lesson')
      .where('lesson.id = :id', { id })
      .leftJoinAndSelect('lesson.vocabularyContent', 'vocabulary')
      .leftJoinAndSelect('vocabulary.synonyms', 'synonyms')
      .leftJoinAndSelect('lesson.practiceContent', 'practice')
      .leftJoinAndSelect('practice.variants', 'practiceVariants')
      .leftJoinAndSelect('practice.multiselect', 'practiceMultiselect')
      .leftJoinAndSelect('practiceMultiselect.variants', 'multiselectVariants')
      .getOne()
  }

  async create(createLessonInput: CreateLessonInput) {
    return await this.lessonEntity.save(createLessonInput)
  }

  async updateStatus(data: UpdateLessonStatusInput) {
    const id = data.id
    await this.lessonEntity.update(id, data)
    return this.lessonEntity.findOneBy({ id })
  }
}
