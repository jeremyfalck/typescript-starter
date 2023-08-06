import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import UsersDto from './users.dto';
import UsersService from './users.service';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';

type UserType = import('./users.repository').UserType;
type UsersResponse = import('./users.service').UsersResponse;
type UserResponse = import('./users.service').UserResponse;

@Controller('/users')
@ApiTags('Users')
export default class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOkResponse({ description: 'The resource was returned successfully' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get(':userId')
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  getOneUser(@Param('userId') userId: UserType['userId']) {
    return this.usersService.getUserById(userId);
  }

  @Post()
  @ApiCreatedResponse({ description: 'Created Succesfully' })
  @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  createUser(@Body() usersDto: UsersDto): Promise<UsersDto> {
    return this.usersService.insertUser(usersDto);
  }

  // @Put(':userId')
  // @ApiCreatedResponse({ description: 'Created Succesfully' })
  // @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  // @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  // updateUser(
  //   @Param('userId', ParseIntPipe) userId: UserType['userId'],
  //   @Body() usersDto: UsersDto,
  // ): UserResponse {
  //   return this.usersService.updateUser(userId, usersDto);
  // }

  // @Delete(':userId')
  // @ApiCreatedResponse({ description: 'Created Succesfully' })
  // @ApiUnprocessableEntityResponse({ description: 'Bad Request' })
  // @ApiForbiddenResponse({ description: 'Unauthorized Request' })
  // deleteUser(
  //   @Param('userId', ParseIntPipe) userId: UserType['userId'],
  // ): UserResponse {
  //   return this.usersService.deleteUser(userId);
  // }
}
