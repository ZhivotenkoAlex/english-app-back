import { InputType, Field, PartialType, ID } from '@nestjs/graphql'
import { ArticlesEntity } from '../entities/articles.entity'
import { ExerciseStatus } from '../../types/articles'

@InputType()
export class UpdateArticlesStatusInput extends PartialType(ArticlesEntity) {
  @Field(() => ID)
  id?: string

  @Field()
  status: ExerciseStatus
}
