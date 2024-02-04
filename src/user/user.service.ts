import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDTO } from "./dto/update-user.dto";
import * as bcrypt from "bcrypt"

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async create(data: CreateUserDTO){

        const salt = await bcrypt.genSalt()

        data.password = await bcrypt.hash(data.password, salt)

        return this.prisma.user.create({
            data
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
        await this.exists(id)
        const salt = await bcrypt.genSalt()

        data.password = await bcrypt.hash(data.password, salt)
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