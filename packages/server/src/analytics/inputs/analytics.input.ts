import { InputType, Field } from 'type-graphql';

@InputType()
export class AnalyticsInput {
    @Field()
    readonly url: string;
    @Field()
    readonly rDuration: number;
    @Field()
    readonly method: string;
    @Field()
    readonly status: string;
    @Field()
    readonly active: boolean;
}
