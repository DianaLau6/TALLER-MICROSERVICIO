import { Inject, Injectable } from '@nestjs/common'
import { ClientProxy } from '@nestjs/microservices'

@Injectable()
export class AppService {
    constructor ( @Inject( 'MOON_SERVICE' ) private _mailClient: ClientProxy ) { }

    gethello(): string {
      return  'ESTE ES LA APP PRINCIPAL'
    }

    newUser (user: any ) {
      //const  mockUser = {
      //  email: 'diana@unach.mx',
      //  name: 'Diana',
       // avatar: 'http://images.com',
      //}
        this._mailClient.emit( 'new_correo', user)
        return 'Se ha enviado en cola'
    }
}

