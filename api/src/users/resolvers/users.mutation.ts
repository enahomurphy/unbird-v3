import { Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';

import { User } from '../models/users.model';

@Resolver(() => User)
export class UserMutationResolver {
  constructor() {}

  private readonly logger = new Logger(UserMutationResolver.name);
}
