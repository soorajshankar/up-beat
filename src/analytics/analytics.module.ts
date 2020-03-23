import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AnalyticsService } from './analytics.service';
import { AnalyticsSchema } from './analytics.schema';
import { AnalyticsResolver } from './analytics.resolver';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Analytics', schema: AnalyticsSchema }])],
    providers: [AnalyticsService, AnalyticsResolver],
})
export class AnalyticsModule {}
