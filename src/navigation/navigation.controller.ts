import { Controller, Get, Query } from '@nestjs/common';
import { NavigationService } from './navigation.service';
import { Navigation } from './navigation.schema';

@Controller('navigation')
export class NavigationController {
  constructor(private readonly navigationService: NavigationService) {}

  @Get()
  async getAllNavigation(
    @Query('language') language?: string,
  ): Promise<Navigation[]> {
    return this.navigationService.getAllNavigation(language);
  }
}
