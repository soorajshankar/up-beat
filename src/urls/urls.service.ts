import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { UrlType } from './dto/create-url.dto';
import { Url } from './interfaces/url.interface';
import { UrlInput } from './inputs/url.input';

@Injectable()
export class UrlsService {
  constructor(@InjectModel('Url') private readonly urlModel: Model<Url>) {}

  async create(createUrlDto: UrlInput): Promise<Url> {
    const createdUrl = new this.urlModel(createUrlDto);
    return createdUrl.save();
  }

  async findAll(): Promise<Url[]> {
    return this.urlModel.find().exec();
  }
}
