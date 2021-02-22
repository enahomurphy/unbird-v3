import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { RedisService } from 'nestjs-redis';

import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from '../dtos/users.dtos';
import { User } from '../models/users.model';
import { generateOTP } from 'src/core/utils/opt';
import { Transaction } from 'sequelize/types';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepo: typeof User,
    @InjectQueue('sms') private readonly smsQueue: Queue,
    private readonly redisService: RedisService,
  ) {}
  getHello(): string[] {
    return ['Hello World!'];
  }

  findAll(): Promise<User[]> {
    return this.userRepo.findAll();
  }

  createUser(data: CreateUserDto, transaction?: Transaction): Promise<User> {
    const instance = new this.userRepo();
    instance.phone = data.phone;
    instance.password = data.password;

    if (transaction) return instance.save({ transaction });
    return instance.save();
  }

  findByID(id: string, include = []): Promise<User> {
    return this.userRepo.findByPk(id, { include });
  }
}
