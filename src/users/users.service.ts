import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import UserEntity from '../entity/user.entity';
import UsersDto from './users.dto';
import { UserMapper } from '../mapper/user.mapper';

type UserType = import('./users.repository').UserType;
export type UsersResponse = { users: UserType[] };
export type UserResponse = { users: UserType };

@Injectable()
export default class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<UserEntity>,
  ) {}

  userMapper = new UserMapper();

  /**
   * Get all users
   */
  public getAllUsers(): Promise<UsersDto[]> {
    return this.userRepository.find();
  }

  public insertUser(user: UsersDto): Promise<UsersDto> {
    return this.userRepository.save(this.userMapper.mapToEntity(user));
  }

  public getUserById(userId: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { id: userId } });
  }

  // /**
  //  * Get one user by it's id
  //  */
  // public getOneUser(userId: UserType['userId']): UserResponse {
  //   const user = this.usersRepository.getOneUser(userId);

  //   if (!user) {
  //     throw new NotFoundException('User was not found');
  //   }

  //   return {
  //     users: user,
  //   };
  // }

  // /**
  //  * Create a new user with data
  //  */
  // public createUser(userDto: UsersDto): UserResponse {
  //   const user = this.usersRepository.createUser(userDto);

  //   return {
  //     users: user,
  //   };
  // }

  // /**
  //  * Update a user with it's id and data
  //  */
  // public updateUser(
  //   userId: UserType['userId'],
  //   userDto: UsersDto,
  // ): UserResponse {
  //   const user = this.usersRepository.updateUser(userId, userDto);

  //   if (!user) {
  //     throw new NotFoundException('User was not found');
  //   }

  //   return {
  //     users: user,
  //   };
  // }

  // /**
  //  * Delete a user with it's id
  //  */
  // public deleteUser(userId: UserType['userId']): UserResponse {
  //   const user = this.usersRepository.deleteUser(userId);

  //   if (!user) {
  //     throw new NotFoundException('User was not found');
  //   }

  //   return {
  //     users: user,
  //   };
  // }
}
