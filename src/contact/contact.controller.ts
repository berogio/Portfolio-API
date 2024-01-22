import { Body, Controller, Post } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  create(@Body() requestBody: any) {
    this.contactService.sendMail(requestBody.email, requestBody.message);
    return { message: 'Data received and processed successfully' };
  }
}
