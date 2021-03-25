import { MiddlewareConsumer, Module, OnModuleInit } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BullModule } from '@nestjs/bull';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

import { DateScalar } from './app.scalars';
import { keys } from './core/config';
import { DatabaseModule } from './core/database/database.module';
import { AuthMiddleware } from 'src/core/middleware';
import { RolesProvider } from 'src/core/roles/roles.provider';
import { EmailModule } from 'src/core/email/email.module';
import { SmsModule } from 'src/core/sms/sms.module';
import { RedisModule } from './core/database/redis.module';

import { UserModule } from './users';

@Module({
  providers: [RolesProvider, DateScalar, EmailModule],
  imports: [
    RedisModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
      debug: keys.env !== 'production',
      playground: keys.env !== 'production',
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message: error.extensions?.exception?.response?.message || error.message,
        };
        return graphQLFormattedError;
      }
    }),
    BullModule.forRoot({
      redis: keys.redis.url,
    }),
    EmailModule,
    SmsModule,
    DatabaseModule,
    UserModule,
  ],
})
export class AppModule implements OnModuleInit {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async onModuleInit() {}

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('graphql');
  }
}
