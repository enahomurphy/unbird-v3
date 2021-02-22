import { SequelizeModule } from '@nestjs/sequelize';
import { keys } from '../config';

export const DatabaseModule = SequelizeModule.forRoot({
  dialect: keys.db.type,
  host: keys.db.host,
  port: keys.db.port,
  username: keys.db.username,
  password: keys.db.password,
  database: keys.db.database,
  autoLoadModels: true,
  synchronize: false,
});
