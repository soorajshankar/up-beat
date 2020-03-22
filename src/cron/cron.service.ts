import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { UrlsService } from 'src/urls/urls.service';
import axios from 'axios';
import { UrlInput } from 'src/urls/inputs/url.input';

@Injectable()
export class CronService {
    constructor(private readonly urlsService: UrlsService) {}
    private readonly logger = new Logger(CronService.name);
    private urls = []; // in memory list of active urls

    @Cron('10 * * * * *') // every minute 45 th second
    async refetchActive() {
        this.logger.debug('>> refetching url');
        this.urls = await this.urlsService.findAll();
    }

    @Cron('* * * * * *') // testing with every second
    async handleCron() {
        this.urls.forEach(async i => {
            this.logger.debug('URL>', i.url);
            const rr = await axios.get(i.url);
            this.logger.debug('URL?>', rr.status + '');
        });
    }
    async getUrl(url: string) {
        return await axios.get(url);
        // .then(r => this.urlsService.createDirect({ url: 'asf', method: 'GET' }));
    }
}
