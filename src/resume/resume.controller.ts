import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';
import { existsSync } from 'fs';

@Controller('resume')
export class ResumeController {
  @Get()
  async getResume(@Res() res: Response) {
    const publicFolderPath = join(process.cwd(), 'public');
    const filename = 'example.pdf';
    const filePath = join(publicFolderPath, filename);
    try {
      if (!existsSync(filePath)) {
        return res.status(404).send('File not found');
      }
      res.setHeader('Content-Type', 'application/pdf');
      res.sendFile(filePath);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
