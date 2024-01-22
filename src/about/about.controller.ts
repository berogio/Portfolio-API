import { Controller, Get } from '@nestjs/common';
import { AboutService } from './about.service';
import { Card } from './about.schema';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  async getAllCards(): Promise<Card[]> {
    return this.aboutService.getAllCards();
  }
}
