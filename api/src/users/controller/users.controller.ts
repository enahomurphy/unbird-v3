import { Controller, Get } from '@nestjs/common';
import { User } from '../models/users.model';
import { UserService } from '../services';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  hello(): string {
    return 'hello world';
  }

  @Get('/users')
  users(): Promise<User[]> {
    return this.userService.findAll();
  }
}
