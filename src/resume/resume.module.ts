import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { PasswordMiddleware } from './password.middleware';

@Module({
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(PasswordMiddleware)
      .forRoutes({ path: 'resume', method: RequestMethod.POST });
  }
}
