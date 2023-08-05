import BaseEntity from 'src/entity/base.entity';
import UserEntity from 'src/entity/user.entity';
import { DataSourceOptions } from 'typeorm';

const databaseConfig: DataSourceOptions = {
  name: 'default',
  username: 'postgres',
  type: 'postgres',
  port: 5432,
  database: 'usersdb',
  password: 'password',
  entities: [BaseEntity, UserEntity],
  migrations: [
    __dirname + '/migration/**/*.ts',
    __dirname + '/migration/**/*.js',
  ],
  synchronize: false,
  logging: true,
  migrationsRun: true,
};

export default databaseConfig;
