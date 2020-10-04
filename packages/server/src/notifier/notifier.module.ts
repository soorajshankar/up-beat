import { Module } from '@nestjs/common';
import { NotifierResolver } from './notifier.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { NotifierSchema } from './notifier.schema';
import { NotifierService } from './notifier.service';
import { SmtpModule } from '../smtp/smtp.module';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Notifier', schema: NotifierSchema }]),
        SmtpModule,
    ],
    providers: [NotifierResolver, NotifierService],
    exports: [NotifierService],
})
export class NotifierModule {}
