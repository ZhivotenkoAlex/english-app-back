import { InputType, Field, PartialType, ID } from '@nestjs/graphql';

import { CreateGrammarInput } from './create-grammar.input';
import { ExerciseStatus } from '../../types/articles';

@InputType()
export class UpdateGrammarStatusInput {
  @Field(() => ID)
  id?: number;

  @Field()
  status: ExerciseStatus;
}
