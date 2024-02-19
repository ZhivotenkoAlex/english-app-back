import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ArticlesItemsTranslateInput {
  @Field({ description: 'rate' })
  rate: number

  @Field({ description: 'translateValue' })
  translateValue: string
}
