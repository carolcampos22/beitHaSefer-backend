import { Body, Controller, Delete, Get, Patch, Post, UseInterceptors } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";
import { ParamId } from "src/decorators/param-id.decorator";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    //@UseInterceptors(LogInterceptor)
    @Post()
    async create(@Body() {name, email, password, phone}: CreateUserDTO){
        return this.userService.create({ name, email, password, phone })
    }

    @Get()
    async read() {
        return this.userService.read();
    }

    @Get(':id')
    async readOne(@ParamId() id: number) {
        await this.userService.exists(id)
        return this.userService.readOne(id)
    }

    @Patch(':id')
    async update(@Body() data: UpdateUserDTO, @ParamId() id: number) {
        await this.userService.exists(id)
        return this.userService.update(id, data)
    }

    @Delete(':id')
    async delete(@ParamId() id: number) {
        await this.userService.exists(id)
        return this.userService.delete(id)
    }

    
}