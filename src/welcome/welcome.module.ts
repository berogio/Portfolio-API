import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WelcomeController } from './welcome.controller';
import { PortfolioItem, PortfolioItemSchema } from './welcome.schema';
import { WelcomeService } from './welcome.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PortfolioItem.name, schema: PortfolioItemSchema },
    ]),
  ],
  controllers: [WelcomeController],
  providers: [WelcomeService],
})
export class WelcomeModule {}
