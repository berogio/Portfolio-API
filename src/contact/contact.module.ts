import { Module } from '@nestjs/common';
import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        service: 'gmail',
        auth: {
          user: 'giorgi.beridze01e@geolab.edu.ge',
          pass: 'ylearginda?',
        },
      },
    }),
  ],

  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
