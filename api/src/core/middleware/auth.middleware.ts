import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response, NextFunction } from 'express';
import { Request } from 'src/core/types/interface';
import { decode } from 'src/core/utils/jwt';
import { UserService } from 'src/users/services';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private usersService: UserService) {}

  async use(req: Request, _: Response, next: NextFunction) {
    const tokenWithBearer = req.headers.authorization || '';
    const token = tokenWithBearer.split(' ')[1];
    const tokenPayload = decode(token);

    if (!tokenPayload) return next();

    const user = await this.usersService.findByID(tokenPayload.userId, [
      'account',
    ]);

    if (user) {
      req.user = user.get();
      // req.user.account = user?.account?.get();
    }

    next();
  }
}
