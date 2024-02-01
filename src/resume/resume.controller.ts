import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { join } from 'path';
import { JwtService } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

@Controller('resume')
export class ResumeController {
  constructor(private readonly jwtService: JwtService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async getResume(@Res() res: Response) {
    try {
      const currentDir = process.cwd();
      const filePath = join(currentDir, 'public', 'example.pdf');
      res.setHeader('Content-Type', 'application/pdf');
      res.sendFile(filePath);
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  }

  @Post()
  async postPassword(@Req() req: Request, @Res() res: Response) {
    try {
      const inputData = req.body;
      const password = inputData?.password;
      if (password === '12345') {
        const token = this.jwtService.sign({ password: password });
        res.status(200).json({ token: token });
      } else {
        res.status(401).json({ message: 'Unauthorized: Incorrect password' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
