import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Experience, ExperienceSchema } from './experience.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Experience.name, schema: ExperienceSchema },
    ]),
  ],
  providers: [ExperienceService],
  controllers: [ExperienceController],
})
export class ExperienceModule {}
