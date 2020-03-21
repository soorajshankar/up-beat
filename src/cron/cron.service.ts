import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { UrlsService } from 'src/urls/urls.service';

@Injectable()
export class CronService {
  constructor(private readonly urlsService: UrlsService) {}

  private readonly logger = new Logger(CronService.name);

  @Cron('50 * * * * *')
  async handleCron() {
    const res = await this.urlsService.findAll();
    this.logger.debug('>>' + JSON.stringify(res));
  }
}
