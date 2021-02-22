import { config } from 'dotenv';
import { db, DBConfig } from './db';

config();

interface Keys {
  db: DBConfig;
  env: string;
  authSecret: string;
  resetSecret: string;
  sms: {
    accountId: string;
    authToken: string;
  };
  email: {
    user: string;
    password: string;
    host: string;
    port: string;
  };
  redis: {
    url: string;
  };
  aws: {
    key: string;
    secret: string;
    s3: {
      bucket: string;
      region: string;
    };
  };
}

export const keys: Keys = {
  db,
  env: process.env.NODE_ENV,
  authSecret: process.env.AUTH_SECRET,
  resetSecret: process.env.RESET_PASSWORD_SECRET,
  sms: {
    accountId: process.env.SMS_ID,
    authToken: process.env.SMS_KEY,
  },
  email: {
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
  },
  redis: {
    url: process.env.REDIS_URL,
  },
  aws: {
    key: process.env.AWS_ACCESS_KEY,
    secret: process.env.AWS_ACCESS_SECRET,
    s3: {
      bucket: process.env.AWS_ACCESS_BUCKET,
      region: process.env.AWS_ACCESS_REGION,
    },
  },
};

export default keys;
