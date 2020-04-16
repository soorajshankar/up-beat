import { InputType, Field, ID } from 'type-graphql';

@InputType()
export class NotifierInput {
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
