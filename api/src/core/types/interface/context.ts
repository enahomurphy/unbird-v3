import Express from 'express';
import { TokenPayload } from './token.payload';
import { User } from 'src/users/models/users.model';

export interface ContextType {
  user: TokenPayload;
  req: Express.Request;
  res: Express.Response;
  timezone: string;
}

export type Response = Express.Response;

export interface Request extends Express.Request {
  user: User;
}

export interface ContextArgs {
  req: Request;
  res: Response;
}
