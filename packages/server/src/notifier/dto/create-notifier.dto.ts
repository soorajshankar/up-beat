import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class NotifierType {
    @Field(() => ID)
    id: string;
    @Field()
    readonly type: string;
    @Field()
    readonly schedule: string;
    @Field()
    readonly active: boolean;
    @Field()
    readonly config: string;
}
