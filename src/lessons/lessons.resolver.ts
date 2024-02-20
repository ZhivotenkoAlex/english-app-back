import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql'

import { CreateLessonInput } from './dto/create-lesson.input'
import { UpdateLessonStatusInput } from './dto/update-lesson-status.input'
import { LessonEntity } from './entities/lesson.entity'
import { LessonsService } from './lessons.service'

@Resolver(() => LessonEntity)
export class LessonsResolver {
  constructor(private readonly lessonsService: LessonsService) {}

  @Query(() => [LessonEntity], { name: 'getAllLessons' })
  findAll() {
    return this.lessonsService.findAll()
  }

  @Query(() => LessonEntity, { name: 'getLesson' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.lessonsService.findOne(id)
  }

  @Mutation(() => LessonEntity)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ) {
    return this.lessonsService.create(createLessonInput)
  }

  @Mutation(() => LessonEntity)
  updateLessonStatus(@Args('input') data: UpdateLessonStatusInput) {
    return this.lessonsService.updateStatus(data)
  }
}
