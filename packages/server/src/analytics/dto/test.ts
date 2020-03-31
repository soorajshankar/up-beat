import { ObjectType, Field, GraphQLTimestamp, ID } from 'type-graphql';
import { AnalyticsType } from './create-analytics.dto';
import { Analytics } from '../interfaces/analytics.interface';

@ObjectType()
export class TestDTO {
    @Field({ nullable: true })
    test?: string;

    @Field(() => [AnalyticsType], { nullable: true })
    analytics?: AnalyticsType[];
}
