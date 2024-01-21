import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageController } from './language/language.controller';
import { LanguageModule } from './language/language.module';
import { ContactService } from './contact/contact.service';
import { ContactModule } from './contact/contact.module';
import { ProjectsController } from './projects/projects.controller';
import { ProjectsModule } from './projects/projects.module';
import { ExperienceService } from './experience/experience.service';
import { ExperienceModule } from './experience/experience.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    LanguageModule,
    ContactModule,
    ProjectsModule,
    ExperienceModule,
  ],
  controllers: [AppController, LanguageController, ProjectsController],
  providers: [AppService, ContactService, ExperienceService],
})
export class AppModule {}
