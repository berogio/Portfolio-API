import { Controller, Get } from '@nestjs/common';
import { WelcomeService } from './welcome.service';
import { PortfolioItem } from './welcome.schema';

@Controller('welcome')
export class WelcomeController {
  constructor(private readonly welcomeService: WelcomeService) {}

  @Get()
  async getWelcomeData(): Promise<PortfolioItem> {
    return this.welcomeService.getWelcomeData();
  }
}
