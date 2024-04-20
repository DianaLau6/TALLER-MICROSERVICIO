import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(user: Partial<User>): Promise<User> {
    return this.userRepository.save(user);
  }

  async getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async getUserById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
  
  async updateUser(id: number, userData: Partial<User>): Promise<User | undefined> {
    // Paso 1: Encontrar el usuario por su id
    const userToUpdate = await this.userRepository.findOne({ where: { id } });
    
    // Verificar si el usuario existe
    if (!userToUpdate) {
      // Manejar el caso donde el usuario no se encuentra
      throw new Error('Usuario no encontrado');
    }
    
    // Actualizar los datos del usuario
    const updatedUser = await this.userRepository.save({
      ...userToUpdate,
      ...userData,
    });
    
    return updatedUser;
  } 
    
  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
