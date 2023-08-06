import { Module } from '@nestjs/common';
import UsersController from './users.controller';
import UsersService from './users.service';
import UsersRepository from './users.repository';
import { userProvider } from './users.provider';
import { DatabaseModule } from '../di/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, ...userProvider],
})
export class UsersModule {}
