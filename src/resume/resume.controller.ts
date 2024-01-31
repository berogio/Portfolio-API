// resume.controller.ts
import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import * as path from 'path'; // Importieren Sie path, um den Dateipfad zu erstellen

@Controller('resume')
export class ResumeController {
  @Post()
  async createResume(@Body() formData: any, @Res() res: Response) {
    try {
      const { password } = formData;
      if (password !== '12345') {
        return res
          .status(HttpStatus.FORBIDDEN)
          .send({ message: 'Incorrect password' });
      }

      // Wenn das Passwort korrekt ist, senden Sie das PDF an den Client
      const pdfFilePath = path.join(__dirname, '..', 'public', 'resume.pdf');
      const fileName = 'resume.pdf';

      // Senden Sie die Datei an den Client
      res.download(pdfFilePath, fileName, (err) => {
        if (err) {
          console.error('Error sending resume:', err);
          return res
            .status(HttpStatus.INTERNAL_SERVER_ERROR)
            .send({ message: 'Error sending resume' });
        } else {
          console.log('Resume sent successfully');
        }
      });
    } catch (error) {
      console.error('Error sending resume:', error);
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ message: 'Error sending resume' });
    }
  }
}
