import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageController } from './language/language.controller';
import { LanguageModule } from './language/language.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), LanguageModule],
  controllers: [AppController, LanguageController],
  providers: [AppService],
})
export class AppModule {}
