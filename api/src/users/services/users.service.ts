import {
  BadRequestException,
  ConflictException,
  Injectable,
} from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { RedisService } from 'nestjs-redis';

import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto, TokenRes, UserLoginDTO } from '../dtos/users.dtos';
import { User } from '../models/users.model';
import { Transaction } from 'sequelize/types';
import { sign } from 'src/core/utils/jwt';
import { isValidPassword } from 'src/core/utils/password';

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

  async createUser(
    data: CreateUserDto,
    transaction?: Transaction,
  ): Promise<TokenRes> {
    const existingUser = await this.findByEmail(data.email);
    if (existingUser) {
      throw new ConflictException({ message: 'User already exists' });
    }

    const instance = new this.userRepo(data);
    instance.password = data.password;

    let newUser: User;
    if (transaction) {
      newUser = await instance.save({ transaction });
    } else {
      newUser = await instance.save();
    }

    const token = sign({ userId: newUser.id, workspaceId: 1 });

    const client = this.redisService.getClient('redis');
    client.set(`userid-login-token:${newUser.id}`, token);
    return { token };
  }

  findByID(id: string, include = []): Promise<User> {
    return this.userRepo.findByPk(id, { include });
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepo.findOne({
      where: {
        email,
      },
    });
  }

  async login({ email, password }: UserLoginDTO): Promise<TokenRes> {
    const user = await this.findByEmail(email);
    if (!user || !isValidPassword(password, user.password)) {
      throw new BadRequestException({
        message: 'Invalid email and password combination',
      });
    }

    const token = sign({ userId: user.id, workspaceId: 1 });

    const client = this.redisService.getClient('redis');
    client.set(`userid-login-token:${user.id}`, token);
    return { token };
  }
}
