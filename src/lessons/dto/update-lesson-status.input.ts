import { InputType, Field, PartialType, ID } from '@nestjs/graphql'

import { ExerciseStatus } from '../../types/types'
import { LessonEntity } from '../entities/lesson.entity'

@InputType()
export class UpdateLessonStatusInput extends PartialType(LessonEntity) {
  @Field(() => ID)
  id?: number

  @Field()
  status: ExerciseStatus
}
