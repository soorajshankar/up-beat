import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class UrlInput {
    @Field()
    readonly url: string;
    @Field()
    readonly method: string;
    @Field()
    readonly active: boolean;
}
