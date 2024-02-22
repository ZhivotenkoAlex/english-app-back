import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateGrammarInput {
  @Field()
  level: string;

  @Field(() => [GrammarInput])
  levelExercises: [GrammarInput];
}

@InputType()
class GrammarInput {
  @Field()
  title: string;

  @Field()
  subtitle: string;

  @Field()
  icon: string;

  @Field()
  slug: string;

  @Field(() => [ExerciseInput])
  exercises: [ExerciseInput];
}

@InputType()
class ExerciseInput {
  @Field()
  title: string;

  @Field()
  translation: string;

  @Field(() => [ExerciseItemInput])
  exerciseItems: [ExerciseItemInput];
}

@InputType()
class ExerciseItemInput {
  @Field()
  isPunctuation: boolean;

  @Field()
  title: string;

  @Field(() => [VariantInput])
  variants: [VariantInput];
}

@InputType()
class VariantInput {
  @Field()
  variant: string;
}
