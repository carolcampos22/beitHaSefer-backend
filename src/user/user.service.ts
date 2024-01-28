import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async create({name, email, password, phone}: CreateUserDTO){
        return this.prisma.user.create({
            data: {
                name,
                email,
                password,
                phone
            },
        })
    }

    async read(){
        return this.prisma.user.findMany();
    }

    async readOne(id: number){
        
        return this.prisma.user.findUnique({
            where: {
                id,
            }
        })
    }

    async update(id: number, data: UpdateUserDTO) {
        
        return this.prisma.user.update({
            data,
            where: {
                id
            }
        })
    }

    async delete (id: number) {
        
        return this.prisma.user.delete({
            where: {
                id
            }
        })
    }

    async exists(id: number)  {
        if(!(await this.readOne(id))) {
            throw new NotFoundException(`O usuário com ID ${id} não existe.`)
        }
    }
}