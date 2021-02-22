import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { BullModule } from '@nestjs/bull';

import { UserController } from './controller';
import { User } from 'src/users/models/users.model';
import { UserService } from './services';
import { UserMutationResolver, UserQueryResolver } from './resolvers';

@Module({
  imports: [
    SequelizeModule.forFeature([User]),
    BullModule.registerQueue({
      name: 'sms',
    }),
  ],
  controllers: [UserController],
  providers: [UserService, UserMutationResolver, UserQueryResolver],
  exports: [UserService],
})
export class UserModule {}
