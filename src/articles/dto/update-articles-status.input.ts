import { InputType, Field, PartialType, ID } from '@nestjs/graphql'

import { ExerciseStatus } from '../../types/types'
import { ArticlesEntity } from '../entities/articles.entity'

@InputType()
export class UpdateArticlesStatusInput extends PartialType(ArticlesEntity) {
  @Field(() => ID)
  id?: string

  @Field()
  status: ExerciseStatus
}
