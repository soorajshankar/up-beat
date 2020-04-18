import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UrlsService } from './urls.service';
import { UrlsResolver } from './urls.resolver';
import { UrlsSchema } from './urls.schema';
import { CronService } from 'src/cron/cron.service';
import { CronModule } from 'src/cron/cron.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Url', schema: UrlsSchema }]),
        forwardRef(() => CronModule),
    ],
    providers: [UrlsResolver, UrlsService],
    exports: [UrlsResolver, UrlsService],
})
export class UrlsModule {}
