import UserEntity from 'src/entity/user.entity';
import { DataSourceOptions } from 'typeorm';

const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'usersdb',
  entities: [UserEntity],
  migrations: [
    __dirname + '/migrations/**/*.ts',
    __dirname + '/migrations/**/*.js',
  ],
  synchronize: true,
  logging: true,
  migrationsRun: true,
};

export default databaseConfig;
