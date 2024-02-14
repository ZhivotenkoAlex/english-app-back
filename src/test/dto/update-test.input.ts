import { InputType, Field, Int, PartialType } from '@nestjs/graphql'

import { CreateTestInput } from './create-test.input'

@InputType()
export class UpdateTestInput extends PartialType(CreateTestInput) {
  @Field(() => Int)
  id: number
}
