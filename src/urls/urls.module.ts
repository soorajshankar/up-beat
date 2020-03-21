import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UrlsService } from './urls.service';
import { UrlsResolver } from './urls.resolver';
import { UrlsSchema } from './urls.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Url', schema: UrlsSchema }])],
  providers: [UrlsResolver, UrlsService],
  exports: [UrlsResolver, UrlsService],
})
export class UrlsModule {}
