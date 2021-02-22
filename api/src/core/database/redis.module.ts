import { DynamicModule } from '@nestjs/common';
import { RedisModule as Module } from 'nestjs-redis';
import { keys } from '../config';

export const RedisModule: DynamicModule = Module.forRootAsync({
  useFactory: () => ({
    url: keys.redis.url,
    name: 'redis',
    connectionName: 'redis',
  }),
});
