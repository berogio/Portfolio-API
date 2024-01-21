import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageModule } from './language/language.module';
import { ContactModule } from './contact/contact.module';
import { ProjectsModule } from './projects/projects.module';
import { ExperienceModule } from './experience/experience.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gberi2012:1OHgbKre249Xc3qf@cluster0.a2bfzeu.mongodb.net/?retryWrites=true&w=majority',
    ),
    LanguageModule,
    ContactModule,
    ProjectsModule,
    ExperienceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
