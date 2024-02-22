import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateRuleInput {
  @Field()
  code: string;

  @Field()
  slug: string;

  @Field(() => [DataInput])
  data: [DataInput];
}

@InputType()
class DataInput {
  @Field()
  code: string;

  @Field()
  description: string;

  @Field()
  title: string;

  @Field(() => [ExampleInput])
  examples: [ExampleInput];
}

@InputType()
class ExampleInput {
  @Field()
  spelling: string;

  @Field()
  translation: string;
}
