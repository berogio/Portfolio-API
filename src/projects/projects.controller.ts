import { Controller, Get } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly prService: ProjectsService) {}

  @Get()
  async getAllProjects() {
    return this.prService.getAllProjects();
  }
}
