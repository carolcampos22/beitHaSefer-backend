import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from '../../enums/role.enum';

@Entity({
  name: 'users',
})
export class UserEntity {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id?: number;

  @Column({
    length: 80,
    nullable: false,
  })
  name: string;

  @Column({
    length: 127,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    length: 127,
    nullable: false,
  })
  password: string;

  @Column({
    length: 20,
    nullable: false,
  })
  phone: string;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @Column({
    default: Role.User,
  })
  role: number;
}
