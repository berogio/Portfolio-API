import { Injectable } from '@nestjs/common';

@Injectable()
export class LanguageService {
  getHello(): string {
    return 'Hello World!!!';
  }
}
