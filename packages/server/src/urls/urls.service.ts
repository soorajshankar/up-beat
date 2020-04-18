import { Model } from 'mongoose';
import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UrlType } from './dto/create-url.dto';
import { Url } from './interfaces/url.interface';
import { UrlInput } from './inputs/url.input';
import { CronService } from '../cron/cron.service';

@Injectable()
export class UrlsService {
    constructor(
        @InjectModel('Url') private readonly urlModel: Model<Url>,
        @Inject(forwardRef(() => CronService))
        private cronService: CronService,
    ) {}

    async create(createUrlDto: UrlInput): Promise<Url> {
        const createdUrl = new this.urlModel(createUrlDto);
        const res = await createdUrl.save();
        this.cronService.refetchActive();
        return res;
    }
    async createDirect(object: object): Promise<Url> {
        const createdUrl = new this.urlModel(object);
        return createdUrl.save();
    }

    async findAll(): Promise<Url[]> {
        return this.urlModel.find().exec();
    }
}
