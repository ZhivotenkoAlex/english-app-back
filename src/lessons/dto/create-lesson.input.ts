import { InputType, Field } from '@nestjs/graphql'

import { ExerciseStatus, PracticeTypes } from '../../types/types'

@InputType()
export class CreateLessonInput {
  @Field()
  slug: string

  @Field()
  topic: string

  @Field()
  image: string

  @Field()
  status: ExerciseStatus

  @Field(() => [VocabularyInput])
  vocabularyContent: [VocabularyInput]

  @Field(() => [PracticeInput])
  practiceContent: [PracticeInput]
}

@InputType()
class VocabularyInput {
  @Field()
  translation: ExerciseStatus

  @Field()
  title: ExerciseStatus

  @Field()
  transcription: string

  @Field()
  definition: string

  @Field()
  example: string

  @Field()
  order: number

  @Field()
  lesson: number

  @Field(() => [SynonymsInput])
  synonyms: [SynonymsInput]
}

@InputType()
class SynonymsInput {
  @Field()
  synonym: string
}

@InputType()
class PracticeInput {
  @Field()
  type: PracticeTypes

  @Field({ nullable: true })
  missed: string

  @Field()
  translation: string

  @Field()
  title: string

  @Field(() => [VariantsInput], { nullable: true })
  variants?: [VariantsInput]

  @Field({ nullable: true })
  placeholder?: string

  @Field(() => [MultiselectInput], { nullable: true })
  multiselect?: [MultiselectInput]

  @Field()
  correctVariant: string

  @Field()
  hint: string
}

@InputType()
class VariantsInput {
  @Field({ nullable: true })
  variant: string
}

@InputType()
class MultiselectInput {
  @Field()
  correctVariant: string

  @Field(() => [VariantsInput])
  variants: [VariantsInput]
}
