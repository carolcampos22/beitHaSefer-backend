import { Role } from '../enums/role.enum';
import { UserEntity } from '../user/entity/user.entity';

export const userEntityList: UserEntity[] = [
  {
    name: 'Jonh Doe',
    email: 'jd@email.com',
    password: '$2b$10$prM5F0d3orRNZH7UXCM3LeMKhAtVevvPHr4q4/b4H4onN35DfM3Ha',
    phone: '5550001',
    role: Role.User,
  },
  {
    name: 'Teste',
    email: 'teste@email.com',
    password: '$2b$10$2tfzG9QWstGsw2rDUxaT3.0YMzZOPVrZTAGVuIrZZP56CmrJmLtIO',
    phone: '5550001',
    role: Role.User,
  },
  {
    name: 'Joao',
    email: 'joão@email.com',
    password: '$2b$10$MQ6kVtYtsILAJbBT54/GCuizlESEDp6DmP2j.8oGCdP/0cCfKhx6K',
    phone: '5550147',
    role: Role.User,
  },
];

/**[
    {
        name: 'Mary Jane',
        email: 'mj@email.com',
        password: "$2b$10$PNpYFw97KEYk30Dv35pJUu2ephEdyncHuxotjPSjrdSyrw4WTUgXW",
        phone: "5550147",
        role: Role.User
    }, {

        name: 'Peter Parker',
        email: 'parker@email.com',
        password: "$2b$10$lGBszSPN8lZ.7oIY5dciY.SD5jgUx2BmVEu6dveuOdkyRVC8hhr.C",
        phone: "5550147",
        role: Role.User
    }, {
        name: 'Joao',
        email: 'joão@email.com',
        password: "e10adc3949ba59abbe56e057f20f883e",
        phone: "5550147",
        role: Role.User
    }

] */

/**
 * export const userEntityList: UserEntity[] = [
    {
        name: 'Mary Jane',
        email: 'mj@email.com',
        password: "Jornalism0",
        phone: "5550147",
        role: Role.User
    }, {

        name: 'Peter Parker',
        email: 'parker@email.com',
        password: "UltimateW#bM45t3r",
        phone: "5550147",
        role: Role.User
    }, {
        name: 'Joao',
        email: 'joão@email.com',
        password: "123456",
        phone: "5550147",
        role: Role.User
    }

]
 */
