import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { CreateUserDto, SignupRes } from '../dtos/users.dtos';
import { UserService } from '../services/users.service'

import { User } from '../models/users.model';

@Resolver(() => User)
export class UserMutationResolver {
  constructor(private userService: UserService) {}

  private readonly logger = new Logger(UserMutationResolver.name);
  @Mutation(() => SignupRes)
  async signup(@Args('payload') payload: CreateUserDto) {
    return this.userService.createUser(payload);
  }
}
