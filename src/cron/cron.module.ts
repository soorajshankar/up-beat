import { Module, HttpModule } from '@nestjs/common';
import { CronService } from './cron.service';
import { UrlsModule } from 'src/urls/urls.module';
import { CatsModule } from 'src/cats/cats.module';

@Module({
    providers: [CronService],
    imports: [UrlsModule, CatsModule],
})
export class CronModule {}
