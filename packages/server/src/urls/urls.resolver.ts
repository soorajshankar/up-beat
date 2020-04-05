import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UrlsService } from './urls.service';
import { UrlType } from './dto/create-url.dto';
import { UrlInput } from './inputs/url.input';
import { UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';

@Resolver('Urls')
export class UrlsResolver {
    constructor(private readonly urlsService: UrlsService) {}

    @Query(() => String)
    async hello() {
        return 'hello';
    }

    @UseGuards(LocalAuthGuard)
    @Query(() => [UrlType])
    async urls() {
        return this.urlsService.findAll();
    }

    @Mutation(() => UrlType)
    async createUrl(@Args('input') input: UrlInput) {
        return this.urlsService.create(input);
    }
}
