import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Post()
    async create(@Body() {name, email, password, phone}: CreateUserDTO){
        return this.userService.create({ name, email, password, phone })
    }

    @Get()
    async read() {
        return this.userService.read();
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) {
        await this.userService.exists(id)
        return this.userService.readOne(id)
    }

    @Patch(':id')
    async update(@Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {
        await this.userService.exists(id)
        return this.userService.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        await this.userService.exists(id)
        return this.userService.delete(id)
    }

    
}