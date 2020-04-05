import { Module } from '@nestjs/common';
import { CatsResolver } from './cats.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './cats.schema';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatsResolver, CatsService],
  controllers: [CatsController],
})
export class CatsModule {}
