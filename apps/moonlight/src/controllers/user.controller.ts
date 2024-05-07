import { Controller, Get, Post, Put, Delete, Param, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: Partial<User>): Promise<any> {
    try {
      const newUser = await this.userService.createUser(userData);
      return { message: 'Usuario creado exitosamente', user: newUser };
    } catch (error) {
      if (error.message === 'El nombre de usuario ya está en uso') {
        throw new HttpException('El nombre de usuario ya está en uso', HttpStatus.BAD_REQUEST);
      }
      throw new HttpException('Error al crear usuario', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User> {
    return this.userService.getUserById(+id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: number, @Body() userData: Partial<User>): Promise<User> {
    return this.userService.updateUser(id, userData);
  }
  
  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<void> {
    return this.userService.deleteUser(+id);
  }
}
