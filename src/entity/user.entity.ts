import { Entity, Column } from 'typeorm';
import BaseEntity from './base.entity';

@Entity({ name: 'users' })
export default class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', length: 300 })
  fullname: string;

  @Column({ type: 'varchar', length: 300 })
  email: string;
}
