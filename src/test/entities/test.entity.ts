import { ObjectType, Field, ID } from '@nestjs/graphql'

@ObjectType({ description: 'TEST' })
export class Test {
  @Field(() => ID, { description: 'test id' })
  id: string

  @Field({ description: 'test title' })
  title: string

  @Field({ description: 'test content' })
  content: string
}
