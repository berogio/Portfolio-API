import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Import JwtModule
import { ResumeController } from './resume.controller';

// Other imports...

@Module({
  imports: [
    // Other modules...
    JwtModule.register({
      secret: 'your_secret_key', // Replace with your actual secret key
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [ResumeController], // Include ResumeController in the controllers array
  // Other configurations...
})
export class ResumeModule {}
