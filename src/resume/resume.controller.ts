import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('resume')
export class ResumeController {
  @Get()
  async getResume(@Res() res: Response) {
    try {
      const currentDir = process.cwd();
      const filePath = join(currentDir, 'public', 'example.pdf');
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'inline; filename=example.pdf');
      res.sendFile(filePath);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
