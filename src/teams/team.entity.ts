import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Team {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field((type) => Int)
  point: number;

  @Field((type) => Int)
  fairplay: number;
}
