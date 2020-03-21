import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import { UrlsModule } from 'src/urls/urls.module';

@Module({
  providers: [CronService],
  imports: [UrlsModule],
})
export class CronModule {}
