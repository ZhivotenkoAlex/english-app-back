import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType({ description: 'TEST' })
export class Test {
  @Field((type) => ID, { description: 'test id' })
  id: string;

  @Field({ description: 'test title' })
  title: string;

  @Field({ description: 'test content' })
  content: string;
}
