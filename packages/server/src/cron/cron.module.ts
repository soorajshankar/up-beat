import { Module, HttpModule } from '@nestjs/common';
import { CronService } from './cron.service';
import { UrlsModule } from 'src/urls/urls.module';
import { CatsModule } from 'src/cats/cats.module';
import { AnalyticsModule } from 'src/analytics/analytics.module';
import { SmtpModule } from 'src/smtp/smtp.module';

@Module({
    providers: [CronService],
    imports: [UrlsModule, AnalyticsModule, SmtpModule],
})
export class CronModule {}
