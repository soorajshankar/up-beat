import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class OverviewDTO {
    @Field({ nullable: true })
    type?: string;

    @Field({ nullable: true })
    value?: number;

    @Field({ nullable: true })
    prev?: number;
}
