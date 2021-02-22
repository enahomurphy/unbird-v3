import { Resolver, Query } from '@nestjs/graphql';

import { User } from '../models/users.model';
import { UserService } from '../services';

@Resolver(() => User)
export class UserQueryResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async users() {
    return this.userService.findAll();
  }
}
