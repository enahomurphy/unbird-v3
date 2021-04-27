import { Resolver, Query, Args } from '@nestjs/graphql';

import { User } from '../models/users.model';
import { UserService } from '../services';
import { UserIdInput, CreateUserDto } from '../dtos/users.dtos';

@Resolver(() => User)
export class UserQueryResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async users() {
    return this.userService.findAll();
  }

  @Query(() => User)
  async userById(@Args('payload') userIdInput: UserIdInput): Promise<User>  {
    return this.userService.findByID(String(userIdInput.id));
  }
}
