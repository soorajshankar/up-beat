import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { NotifierService } from './notifier.service';
import { NotifierType } from './dto/create-notifier.dto';
import { NotifierInput } from './inputs/notifier.input';

@Resolver()
export class NotifierResolver {
    constructor(private readonly notifierService: NotifierService) {}

    @Query(() => String)
    async hello() {
        return 'hello';
    }

    @Query(() => [NotifierType])
    async notifiers() {
        return this.notifierService.findAll();
    }

    @Mutation(() => NotifierType)
    async createNotifier(@Args('input') input: NotifierInput) {
        return this.notifierService.create(input);
    }
}
