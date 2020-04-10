import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BullModule } from '@nestjs/bull';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { join } from 'path';
import configuration, { getMongoConnStr } from 'config/configuration';
import { ScheduleModule } from '@nestjs/schedule';
import { UrlsModule } from './urls/urls.module';
import { CronModule } from './cron/cron.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { SmtpModule } from './smtp/smtp.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
    imports: [
        ConfigModule.forRoot({ load: [configuration] }),
        GraphQLModule.forRoot({
            autoSchemaFile: 'schema.gql',
        }),
        MongooseModule.forRoot(getMongoConnStr()),
        BullModule.registerQueue({
            name: 'audio',
            redis: {
                host: process.env.REDIS_HOST,
                port: parseInt(process.env.REDIS_PORT, 10),
            },
        }),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
            renderPath: '/',
        }),
        ScheduleModule.forRoot(),

        CatsModule,
        UrlsModule,
        CronModule,
        AnalyticsModule,
        SmtpModule,
        AuthModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
