import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from '../src/services/user.service'; 

@Controller()
export class AppController {
    constructor(
        private readonly appService: AppService,
        private readonly userService: UserService, 
    ) { }

    @Post()
    async newUser(@Body() body: any): Promise<any> {
        try {
            // Llama al servicio de usuario para crear un nuevo usuario en la base de datos
            const newUser = await this.userService.createUser(body);
            return { message: 'Usuario creado exitosamente', user: newUser };
        } catch (error) {
            // Maneja cualquier error y devuelve un mensaje de error al cliente
            return { error: 'No se pudo crear el usuario', details: error.message };
        }
    }
}