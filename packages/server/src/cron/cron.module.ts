import { Module, HttpModule } from '@nestjs/common';
import { CronService } from './cron.service';
import { UrlsModule } from '../urls/urls.module';
import { AnalyticsModule } from '../analytics/analytics.module';
import { SmtpModule } from '../smtp/smtp.module';

@Module({
    providers: [CronService],
    imports: [UrlsModule, AnalyticsModule, SmtpModule],
})
export class CronModule {}
