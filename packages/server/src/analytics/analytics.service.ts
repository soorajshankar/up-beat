import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Analytics } from './interfaces/analytics.interface';
import * as moment from 'moment';

import { AnalyticsInput } from './inputs/analytics.input';
import { Test } from './interfaces/test.interface';

@Injectable()
export class AnalyticsService {
    constructor(@InjectModel('Analytics') private readonly analyticsModel: Model<Analytics>) {}

    async create(input: AnalyticsInput): Promise<Analytics> {
        const nw = new this.analyticsModel(input);
        return nw.save();
    }
    async createDirect(object: object): Promise<Analytics> {
        const nw = new this.analyticsModel(object);
        return nw.save();
    }

    async findAll(): Promise<Analytics[]> {
        return this.analyticsModel.find().exec();
    }
    async integrate(): Promise<Test> {
        return new Promise(async (resolve, rej) => {
            const res: Test = { url: 'Test' };
            res.analytics = (await this.findAll()) as Analytics[];
            resolve(res);
        });
    }

    async findWithQry(qry: object): Promise<Analytics[]> {
        return this.analyticsModel.find({ ...qry });
    }
}
