import { Module } from '@nestjs/common';
import { AboutService } from './about.service';
import { Card, CardSchema } from './about.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutController } from './about.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Card.name, schema: CardSchema }]),
  ],
  providers: [AboutService],
  controllers: [AboutController],
})
export class AboutModule {}
