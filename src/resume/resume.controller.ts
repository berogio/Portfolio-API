import { Controller, Post, Body } from '@nestjs/common';

@Controller('resume')
export class ResumeController {
  @Post()
  createResume(@Body() formData: any) {
    return { message: 'Received data successfully', data: formData };
  }
}
