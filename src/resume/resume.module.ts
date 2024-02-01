import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ResumeController } from './resume.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'your_secret_key',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [ResumeController],
})
export class ResumeModule {}
