import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { Role } from '../../enums/role.enum';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 6,
    minNumbers: 1,
    minLowercase: 0,
    minSymbols: 0,
    minUppercase: 0,
  })
  password: string;

  @IsString()
  phone: string;

  @IsOptional()
  @IsEnum(Role)
  role?: number;
}
