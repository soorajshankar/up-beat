import { Module } from '@nestjs/common';
import { NotifierResolver } from './notifier.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { NotifierSchema } from './notifier.schema';
import { NotifierService } from './notifier.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Notifier', schema: NotifierSchema }])],
    providers: [NotifierResolver, NotifierService],
})
export class NotifierModule {}
