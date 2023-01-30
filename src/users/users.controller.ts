import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() newUser: CreateUserDto) {
    return this.usersService.createUser(newUser);
  }

  @Get()
  getUsers():Promise<User[]> {
    return this.usersService.getUsers();
  }

  @Get(':id_usuario')
  getUser(@Param('id_usuario', ParseIntPipe) id_usuario: number) {
    return this.usersService.getUser(id_usuario);
  }

  @Put(':id_usuario')
  updateUser(@Param('id_usuario') id_usuario: number, @Body() user: UpdateUserDto) {
    return this.usersService.updateUser(id_usuario, user)
  }

  @Delete(':id_usuario')
  deleteUser(@Param('id_usuario') id_usuario: number) {
    return this.usersService.deleteUser(id_usuario);
  }
}
