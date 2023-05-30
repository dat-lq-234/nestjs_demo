import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Run auth middleware');
    const token = req.headers.authorization;

    if (!token)
      throw new HttpException('No authorization', HttpStatus.FORBIDDEN);
    if (token === 'abc') next();
    else throw new HttpException('Invalid authorization', HttpStatus.FORBIDDEN);
  }
}
