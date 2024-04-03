import { Body, Controller, Post } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
    constructor ( private readonly appService: AppService ) { }

    @Post()
    newUser(@Body() body:any): string {
      return this.appService.newUser(body)
    }
    
    // public async newUser ( @Body() body: unknown ) {
    //     const fakeUser = {
    //         email: 'fake_user@microservice.com',
    //         name: 'Fake User',
    //         avatar: 'https://fake-image.com',
    //         password: 'FakePassword_1234'KZ
    //     }
    //     body = ( Object.keys( body ).length ) ? body : fakeUser
    //     return this.appService.newUser( body )
}
