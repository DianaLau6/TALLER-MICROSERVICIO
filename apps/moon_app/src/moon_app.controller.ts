import { Controller } from '@nestjs/common';
import { MoonAppService } from './moon_app.service';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class MoonAppController {
  constructor(private readonly moonAppService: MoonAppService) {}

  @EventPattern('new_correo')
  async handleNewMail(data: any) {
    try {
      console.log('Este es un nuevo correo ', data);
      
      // Agregar los datos del correo a la base de datos utilizando el servicio
      await this.moonAppService.addDataToDatabase(data);
      
      // Envía una respuesta o realiza otras operaciones según sea necesario
    } catch (error) {
      console.error('Error al manejar el nuevo correo:', error);
      // Manejar errores
    }
  }
}