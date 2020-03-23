import { ObjectType, Field, GraphQLTimestamp, ID } from 'type-graphql';

@ObjectType()
export class AnalyticsType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly url: string;
    @Field()
    readonly method: string;
    @Field()
    readonly status: string;
    @Field(() => GraphQLTimestamp)
    readonly createdAt: number;
}
