import { Controller, Get, Post, Req, Res } from '@nestjs/common';
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
      res.sendFile(filePath);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
  @Post()
  async postPassword(@Req() req: Request, @Res() res: Response) {
    try {
      const inputData = req.body;
      console.log('Received POST request with data:', inputData);
      res.status(200).json({ message: 'POST request received successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
