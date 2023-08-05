import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import UserEntity from './entity/user.entity';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
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
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
