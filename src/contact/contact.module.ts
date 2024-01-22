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
          pass: 'Beridzeo1j',
        },
      },
    }),
  ],

  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
