import { Controller, Get, Query } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { Experience } from './experience.schema';

@Controller('experiences')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}

  @Get()
  async getAllExperiences(
    @Query('language') language?: string,
  ): Promise<Experience[]> {
    return this.experienceService.getAllExperiences(language);
  }
}
