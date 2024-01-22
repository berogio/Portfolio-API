import { Controller, Get } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { Experience } from './experience.schema';

@Controller('experience')
export class ExperienceController {
  constructor(private readonly experienceService: ExperienceService) {}
  @Get()
  async getAllExperiences(): Promise<Experience[]> {
    return this.experienceService.getAllExperiences();
  }
}
