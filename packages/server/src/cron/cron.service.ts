import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { UrlsService } from 'src/urls/urls.service';
import axios from 'axios';
import { AnalyticsService } from 'src/analytics/analytics.service';

const instance = axios.create();
instance.interceptors.request.use(config => {
    config.headers['request-startTime'] = process.hrtime();
    return config;
});

instance.interceptors.response.use(response => {
    const start = response.config.headers['request-startTime'];
    const end = process.hrtime(start);
    const milliseconds = Math.round(end[0] * 1000 + end[1] / 1000000);
    response.headers['request-duration'] = milliseconds;
    return response;
});
@Injectable()
export class CronService {
    constructor(
        private readonly urlsService: UrlsService,
        private readonly analyticsService: AnalyticsService,
    ) {}
    private readonly logger = new Logger(CronService.name);
    private urls = []; // in memory list of active urls

    @Cron('45 * * * * *') // every minute 45 th second
    async refetchActive() {
        this.logger.debug('>> refetching url');
        this.urls = await this.urlsService.findAll();
    }

    @Cron('50 * * * * *') // testing with every second
    async handleCron() {
        this.urls.forEach(async i => {
            try {
                const rr = await instance.get(i.url);
                this.analyticsService.createDirect({
                    url: i.id,
                    rDuration: rr?.headers['request-duration'],
                    method: i.method,
                    status: rr.status + '',
                    active: true,
                });
                this.logger.debug('URL?>', rr.status + ':' + rr.headers['request-duration']);
            } catch (rr) {
                this.analyticsService.createDirect({
                    url: i.id,
                    rDuration: 0,
                    method: i.method,
                    status: rr.code,
                    active: true,
                    message: rr.Error || '',
                });
                this.logger.error('URL?>', rr.Error,rr.code);
            }
        });
    }
    async getUrl(url: string) {
        return await axios.get(url);
        // .then(r => this.urlsService.createDirect({ url: 'asf', method: 'GET' }));
    }
}
