import { Role } from "../enums/role.enum"
import { UserEntity } from "../user/entity/user.entity"

export const userEntityList: UserEntity[] = [{
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
}
]