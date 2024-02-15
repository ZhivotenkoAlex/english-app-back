import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

import { CreateArticlesTranslateInput } from './create-articles-translate.input'

@InputType()
export class UpdateArticlesTranslateInput extends PartialType(CreateArticlesTranslateInput) {
  @Field(() => Int)
  id: number
}
