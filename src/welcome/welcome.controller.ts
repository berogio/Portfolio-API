import { Controller, Get, Query } from '@nestjs/common';
import { WelcomeService } from './welcome.service';
import { PortfolioItem } from './welcome.schema';

@Controller('welcome')
export class WelcomeController {
  constructor(private readonly welcomeService: WelcomeService) {}

  @Get()
  async getWelcomeData(
    @Query('language') language?: string,
  ): Promise<PortfolioItem[]> {
    return this.welcomeService.getWelcomeData(language);
  }
}
