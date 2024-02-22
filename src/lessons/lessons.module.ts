import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { LessonEntity } from './entities/lesson.entity'
import { PracticeMultiselectEntity } from './entities/multiselect.entity'
import { MultiselectVariantsEntity } from './entities/multiselectVariants.entity'
import { PracticeEntity } from './entities/practice.entity'
import { PracticeVariantsEntity } from './entities/practiceVariants.entity'
import { SynonymsEntity } from './entities/synonyms.entity'
import { VocabularyEntity } from './entities/vocabulary.entity'
import { LessonsResolver } from './lessons.resolver'
import { LessonsService } from './lessons.service'

@Module({
  providers: [LessonsResolver, LessonsService],
  imports: [
    TypeOrmModule.forFeature([
      LessonEntity,
      VocabularyEntity,
      SynonymsEntity,
      PracticeEntity,
      PracticeVariantsEntity,
      PracticeMultiselectEntity,
      MultiselectVariantsEntity,
    ]),
  ],
})
export class LessonsModule {}
