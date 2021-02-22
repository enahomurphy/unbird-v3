import { config } from 'dotenv';
import { Dialect } from 'sequelize/types';

config();

export interface DBConfig {
  type: Dialect;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

export const db: DBConfig = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

export default {
  development: db,
  test: db,
  production: db,
};
