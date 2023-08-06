import UserEntity from '../entity/user.entity';
import UsersDto from '../users/users.dto';

export class UserMapper {
  public mapToEntity(userDto: UsersDto): UserEntity {
    const userEntity = new UserEntity();
    userEntity.fullname = userDto.fullname;
    userEntity.email = userDto.email;

    userEntity.createDateTime = new Date();
    userEntity.lastChangedDateTime = new Date();
    userEntity.isActive = true;
    userEntity.isArchived = false;
    userEntity.createdBy = 'admin';
    userEntity.lastChangedBy = 'admin';
    userEntity.internalComment = null;

    return userEntity;
  }

  public mapToDto(userEntity: UserEntity): UsersDto {
    const userDto = new UsersDto();
    userDto.fullname = userEntity.fullname;
    userDto.email = userEntity.email;

    return userDto;
  }
}
