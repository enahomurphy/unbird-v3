import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { RedisService,  } from 'nestjs-redis';

import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto, SignupRes } from '../dtos/users.dtos';
import { User } from '../models/users.model';
import { generateOTP } from 'src/core/utils/opt';
import { Transaction } from 'sequelize/types';
import { sign } from 'src/core/utils/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepo: typeof User,
    @InjectQueue('sms') private readonly smsQueue: Queue,
    private redisService: RedisService,
  ) {}
  getHello(): string[] {
    return ['Hello World!'];
  }

  findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }

  async createUser(data: CreateUserDto, transaction?: Transaction): Promise<SignupRes> {
    const instance = new this.userRepo(data);
    instance.password = data.password;

    let newUser: User;
    if (transaction) {
      newUser = await instance.save({ transaction })
    } else {
      newUser = await instance.save();
    }
    
    const token = sign({ userId: newUser.id });

    const client = this.redisService.getClient('redis');
    client.set(`userid-login-token-${newUser.id}`, token);
    return ({ token });
  }

  findByID(id: string, include = []): Promise<User> {
    return this.userRepo.findByPk(id, { include });
  }
}
