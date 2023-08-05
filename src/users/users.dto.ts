import { ApiProperty } from '@nestjs/swagger';

export default class UsersDto {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  fullname: string;

  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  email: string;
}
