import { ObjectType, Field, GraphQLTimestamp, ID } from 'type-graphql';

@ObjectType()
export class UrlType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly url: string;
  @Field()
  readonly method: string;
  @Field(() => GraphQLTimestamp)
  readonly createdAt: number;
}
