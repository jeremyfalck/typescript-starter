import UserEntity from '../entity/user.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'password',
        database: 'usersdb',
        entities: [UserEntity],
        synchronize: true,
        logging: true,
        migrationsRun: true,
      });

      return dataSource.initialize();
    },
  },
];
