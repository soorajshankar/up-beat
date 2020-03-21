import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UrlsService } from './urls.service';
import { UrlType } from './dto/create-url.dto';
import { UrlInput } from './inputs/url.input';

@Resolver('Urls')
export class UrlsResolver {
  constructor(private readonly urlsService: UrlsService) {}
  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [UrlType])
  async urls() {
    return this.urlsService.findAll();
  }

  @Mutation(() => UrlType)
  async createUrl(@Args('input') input: UrlInput) {
    return this.urlsService.create(input);
  }
}
