import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { UrlsService } from 'src/urls/urls.service';
import axios from 'axios';
import { UrlInput } from 'src/urls/inputs/url.input';

@Injectable()
export class CronService {
    constructor(private readonly urlsService: UrlsService) {}
    private readonly logger = new Logger(CronService.name);

    @Cron('* * * * * *')
    async handleCron() {
        const res = await this.urlsService.findAll();
        this.logger.debug('>>' + (await this.getUrl('http://google.com')));
    }
    async getUrl(url: string) {
        return await axios.get(url);
        // .then(r => this.urlsService.createDirect({ url: 'asf', method: 'GET' }));
    }
}
