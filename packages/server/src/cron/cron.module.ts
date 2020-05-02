import { Module, HttpModule, forwardRef } from '@nestjs/common';
import { CronService } from './cron.service';
import { UrlsModule } from '../urls/urls.module';
import { AnalyticsModule } from '../analytics/analytics.module';
import { SmtpModule } from '../smtp/smtp.module';
import { NotifierModule } from '../notifier/notifier.module';

@Module({
    providers: [CronService],
    imports: [
        forwardRef(() => UrlsModule),
        forwardRef(() => AnalyticsModule),
        forwardRef(() => SmtpModule),
        forwardRef(() => NotifierModule),
    ],
    exports: [CronService],
})
export class CronModule {}
