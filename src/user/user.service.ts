import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { UserEntity } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async create(data: CreateUserDTO) {
    if (
      await this.usersRepository.exists({
        where: {
          email: data.email,
        },
      })
    ) {
      throw new BadRequestException('Este e-mail já está cadastrado');
    }

    const salt = await bcrypt.genSalt();

    data.password = await bcrypt.hash(data.password, salt);

    const user = this.usersRepository.create(data);

    return this.usersRepository.save(user);
  }

  async read() {
    return this.usersRepository.find();
  }

  async readOne(id: number) {
    await this.exists(id);
    return this.usersRepository.findOneBy({
      id,
    });
  }

  // async update(id: number, data: UpdateUserDTO) {
  //     await this.exists(id)
  //     const salt = await bcrypt.genSalt()

  //     data.password = await bcrypt.hash(data.password, salt)
  //     await this.usersRepository.update(id, data)

  //     return this.readOne(id)
  // }

  async update(id: number, data: UpdateUserDTO) {
    await this.exists(id);

    if (data.password) {
      const salt = await bcrypt.genSalt();
      data.password = await bcrypt.hash(data.password, salt);
    }

    await this.usersRepository.update(id, data);

    return this.readOne(id);
  }

  async delete(id: number) {
    await this.exists(id);

    await this.usersRepository.delete(id);

    return true;
  }

  async exists(id: number) {
    if (
      !(await this.usersRepository.exists({
        where: {
          id,
        },
      }))
    ) {
      throw new NotFoundException(`O usuário ${id} não existe`);
    }
  }
}

// UltimateW#bM45t3r
