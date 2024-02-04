import { Body, Controller, Delete, Get, Patch, Post, UseGuards, UseInterceptors } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";
import { ParamId } from "src/decorators/param-id.decorator";
import { Roles } from "src/decorators/roles.decorator";
import { Role } from "src/enums/role.enum";
import { RoleGuard } from "src/guards/role.guard";
import { AuthGuard } from "src/guards/auth.guard";


//@UseInterceptors(LogInterceptor) //está definido na função bootstrap
@Roles(Role.Admin)
@UseGuards( AuthGuard, RoleGuard)
@Controller('users')
export class UserController {

    constructor(private readonly userService: UserService){}

    
    @Post()
    async create(@Body() {name, email, password, phone, role}: CreateUserDTO){
        return this.userService.create({ name, email, password, phone, role })
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