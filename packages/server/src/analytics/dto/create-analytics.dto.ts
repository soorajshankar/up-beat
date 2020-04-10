import { ObjectType, Field, GraphQLTimestamp, ID } from 'type-graphql';

@ObjectType()
export class AnalyticsType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly url: string;
    @Field({ nullable: true })
    readonly rDuration?: number;
    @Field()
    readonly method: string;
    @Field({ nullable: true })
    readonly message?: string;
    @Field()
    readonly status: string;
    @Field(() => GraphQLTimestamp)
    readonly createdAt: number;
}
