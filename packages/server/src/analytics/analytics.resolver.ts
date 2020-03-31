import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { AnalyticsService } from './analytics.service';
import { AnalyticsType } from './dto/create-analytics.dto';
import { AnalyticsInput } from './inputs/analytics.input';
import moment = require('moment');
import { TestDTO } from './dto/test';

@Resolver('Urls')
export class AnalyticsResolver {
    constructor(private readonly analyticsService: AnalyticsService) {}
    @Query(() => [AnalyticsType])
    async analytics() {
        return this.analyticsService.findAll();
    }
    @Query(() => TestDTO)
    async test() {
        const res = await this.analyticsService.integrate();
        return res;
    }

    @Query(() => [AnalyticsType])
    async getAllTimeAnalytics(@Args('input') url: string) {
        return this.analyticsService.findWithQry({ url });
    }
    @Query(() => [AnalyticsType])
    async getAnalytics(
        @Args('input') url: string,
        @Args({ name: 'from', type: () => Date, nullable: true }) from?: Date,
        @Args({ name: 'to', type: () => Date, nullable: true }) to?: Date,
    ) {
        return this.analyticsService.findWithQry({
            url,
            ...(from &&
                to && {
                    createdAt: {
                        $gte: moment(from).startOf('day'),
                        $lt: moment(to).endOf('day'),
                    },
                }),
        });
    }

    @Mutation(() => AnalyticsType)
    async createAnalytics(@Args('input') input: AnalyticsInput) {
        return this.analyticsService.create(input);
    }
}
