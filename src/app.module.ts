import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LanguageModule } from './language/language.module';
import { ContactModule } from './contact/contact.module';
import { ProjectsModule } from './projects/projects.module';
import { ExperienceModule } from './experience/experience.module';
import { AboutModule } from './about/about.module';
import { SkillsModule } from './skills/skills.module';
import { NavigationModule } from './navigation/navigation.module';
import { WelcomeModule } from './welcome/welcome.module';
import mongodbConfig from './mongodb.config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MongooseModule.forRoot(mongodbConfig.uri),
    LanguageModule,
    ContactModule,
    ProjectsModule,
    ExperienceModule,
    AboutModule,
    SkillsModule,
    NavigationModule,
    WelcomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
