import { Controller, Get } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { Skill } from './skills.schema';

@Controller('skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}

  @Get()
  async getAllSkills(): Promise<Skill[]> {
    return this.skillsService.getAllSkills();
  }
}
