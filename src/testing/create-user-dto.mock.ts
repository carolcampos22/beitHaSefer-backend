import { Role } from '../enums/role.enum';
import { CreateUserDTO } from '../user/dto/create-user.dto';

export const createUserDTO: CreateUserDTO = {
  name: 'Mary Jane',
  email: 'mj@email.com',
  password: '123456',
  phone: '123456789',
  role: Role.User,
};
