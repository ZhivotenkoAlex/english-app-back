import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { GrammarExerciseItemEntity } from './entities/exerciseItem.entity';
import { GrammarExerciseItemVariantEntity } from './entities/exerciseItemVariant.entity';
import { GrammarEntity } from './entities/grammar.entity';
import { GrammarExerciseEntity } from './entities/grammarExercise.entity';
import { GrammarLevelsEntity } from './entities/grammarLevels.entity';
import { GrammarResolver } from './grammar.resolver';
import { GrammarService } from './grammar.service';

@Module({
  providers: [GrammarResolver, GrammarService],
  imports: [
    TypeOrmModule.forFeature([
      GrammarLevelsEntity,
      GrammarEntity,
      GrammarExerciseEntity,
      GrammarExerciseItemEntity,
      GrammarExerciseItemVariantEntity,
    ]),
  ],
})
export class GrammarModule {}
