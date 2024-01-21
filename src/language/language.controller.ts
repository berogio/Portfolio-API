import { Controller, Get } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
  constructor(private readonly laService: LanguageService) {}
  @Get()
  getHello(): string {
    return this.laService.getHello();
  }
}
