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
    // Verificar que el nombre y el correo electrónico no estén en uso
  const existingUser = await this.userRepository.findOne({ where: { Name: user.Name } });
  const existingUserByEmail = await this.userRepository.findOne({ where: { Email: user.Email } });

  if (existingUser) {
    throw new Error('El nombre de usuario ya está en uso');
  }

  if (existingUserByEmail) {
    throw new Error('El correo electrónico ya está en uso');
  }

  // Validar el formato del correo electrónico
  if (!isValidEmailFormat(user.Email)) {
    throw new Error('Formato de correo electrónico inválido');
  }

  // Guardar el usuario en la base de datos si pasa las validaciones
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
function isValidEmailFormat(email: string): boolean {
  const emailRegex = /^[a-zA-Z]{3,}@([a-zA-Z]{1,10})\.([a-zA-Z]{1,6})$/;
  return emailRegex.test(email);
}


