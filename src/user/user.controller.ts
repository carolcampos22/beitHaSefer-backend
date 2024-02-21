import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserService } from './user.service';
import { Roles } from '../decorators/roles.decorator';
import { Role } from '../enums/role.enum';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';
import { ParamId } from '../decorators/param-id.decorator';
import { LogInterceptor } from '../interceptors/log.interceptor';

@UseInterceptors(LogInterceptor)
@Roles(Role.Admin)
@UseGuards(AuthGuard, RoleGuard)
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() { name, email, password, phone, role }: CreateUserDTO) {
    return this.userService.create({ name, email, password, phone, role });
  }

  @Get()
  async read() {
    return this.userService.read();
  }

  @Get(':id')
  async readOne(@ParamId() id: number) {
    await this.userService.exists(id);
    return this.userService.readOne(id);
  }

  @Patch(':id')
  async update(@Body() data: UpdateUserDTO, @ParamId() id: number) {
    await this.userService.exists(id);
    return this.userService.update(id, data);
  }

  @Delete(':id')
  async delete(@ParamId() id: number) {
    await this.userService.exists(id);
    return {
      success: await this.userService.delete(id),
    };
  }
}
