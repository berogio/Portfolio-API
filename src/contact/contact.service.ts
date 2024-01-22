import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ContactService {
  constructor(private readonly mailerService: MailerService) {}

  sendMail(email: string, message: string): void {
    this.mailerService.sendMail({
      to: 'giorgi.beridze01e@geolab.edu.ge',
      from: 'giorgi.beridze01e@geolab.edu.ge',
      subject: email,
      text: message,
      html: message,
    });
  }
}
