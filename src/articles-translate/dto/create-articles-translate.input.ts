import { InputType, Field } from '@nestjs/graphql'
import { ArticlesItemsTranslateInput } from './create-articles-items.input'

@InputType()
export class CreateArticlesTranslateInput {
  @Field({ description: 'word' })
  word: string

  @Field(() => [ArticlesItemsTranslateInput])
  translateItems: [ArticlesItemsTranslateInput]
}
