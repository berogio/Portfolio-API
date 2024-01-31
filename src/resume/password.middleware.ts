import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class PasswordMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { password } = req.body;
    if (password !== '12345') {
      throw new HttpException('Incorrect password', HttpStatus.FORBIDDEN);
    }
    next();
  }
}
