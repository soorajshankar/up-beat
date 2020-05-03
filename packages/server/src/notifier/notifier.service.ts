import { Model } from 'mongoose';
import { Injectable, Logger, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notifier } from './interfaces/notifier.interface';
import { NotifierInput } from './inputs/notifier.input';
import { SmtpService } from '../smtp/smtp.service';

@Injectable()
export class NotifierService {
    constructor(
        @InjectModel('Notifier') private readonly notifierModel: Model<Notifier>,
        @Inject(forwardRef(() => SmtpService))
        private readonly smtpService: SmtpService,
    ) {}
    private readonly logger = new Logger(NotifierService.name);

    async create(createNotifierDto: NotifierInput): Promise<Notifier> {
        const createdNotifier = new this.notifierModel(createNotifierDto);
        return await createdNotifier.save();
    }

    async findAll(): Promise<Notifier[]> {
        return await this.notifierModel.find().exec();
    }
    async notify(config) {
        this.logger.debug('Notifying', config);
        try {
            const resp = await this.smtpService.sendMail({ to: 'soorajshankar@gmail.com' });
            this.logger.debug('Done');
        } catch (err) {
            this.logger.error({ err });
        }
    }
}
