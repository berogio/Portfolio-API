import { Controller, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('resume')
export class ResumeController {
  @Get()
  async getPicture(@Query('filename') filename: string, @Res() res: Response) {
    if (!filename) {
      return res.status(400).send('Missing filename');
    }

    try {
      res.sendFile(filename, { root: './public' });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }
}
