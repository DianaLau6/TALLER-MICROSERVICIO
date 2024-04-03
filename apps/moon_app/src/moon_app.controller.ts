import { Controller, Get } from '@nestjs/common';
import { MoonAppService } from './moon_app.service';
import { EventPattern } from '@nestjs/microservices'

@Controller()
export class MoonAppController {
  constructor(private readonly moonAppService: MoonAppService) {}

 // @Get()
  //getHello(): string {
  //  return this.moonAppService.getHello();
  //}

  @EventPattern( 'new_correo' )
    handleNewMail ( data: any ) {
        console.log( 'Este es un nuevo correo ', data)
        //TODO: Lógica relacionada a la creación de un nuevo mail
    }
}
