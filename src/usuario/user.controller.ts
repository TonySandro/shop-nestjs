import { UpdateUserDataDTO } from './dto/UpdateUserData.dto';
import { UserEntity } from './user.entity';
import { AddUserDTO } from './dto/AddUser.dto';
import { UserRepository } from './user.repository';
import { Controller, Post, Get, Put, Param, Delete } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
import { v4 as uuid } from 'uuid';
import { UserListDTO } from './dto/UserList.dto';

@Controller('/users')
export class UserController {
  constructor(private userRepository: UserRepository) {}

  @Post()
  async addUser(@Body() data: AddUserDTO) {
    const userEntity = new UserEntity();
    userEntity.email = data.email;
    userEntity.password = data.password;
    userEntity.name = data.name;
    userEntity.id = uuid();

    this.userRepository.salve(userEntity);
    return { id: userEntity.id, message: 'User created' };
  }

  @Get()
  async listUsers() {
    const allUsers = await this.userRepository.list();
    const UserList = allUsers.map(
      (user) => new UserListDTO(user.name, user.id),
    );

    return UserList;
  }

  @Put('/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() newData: UpdateUserDataDTO,
  ) {
    const userUpdated = await this.userRepository.update(id, newData);
    return {
      user: userUpdated,
      message: 'User updated!',
    };
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const user = await this.userRepository.remove(id);

    return {
      user,
      message: 'User removed',
    };
  }
}
