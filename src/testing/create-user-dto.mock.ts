import { Role } from "../enums/role.enum";
import { CreateUserDTO } from "../user/dto/create-user.dto";

export const createUserDTO: CreateUserDTO = {
    name: 'Jonh Doe',
    email: 'jd@email.com',
    password: 'Abc123',
    phone: '123456789',
    role: Role.User
}