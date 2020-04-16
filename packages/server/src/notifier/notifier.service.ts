import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Notifier } from './interfaces/notifier.interface';
import { NotifierInput } from './inputs/notifier.input';

@Injectable()
export class NotifierService {
    constructor(@InjectModel('Notifier') private readonly notifierModel: Model<Notifier>) {}

    async create(createNotifierDto: NotifierInput): Promise<Notifier> {
        const createdNotifier = new this.notifierModel(createNotifierDto);
        return await createdNotifier.save();
    }

    async findAll(): Promise<Notifier[]> {
        return await this.notifierModel.find().exec();
    }
}
