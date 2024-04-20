import { NestFactory } from '@nestjs/core'
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { MoonAppModule } from './moon_app.module'

async function bootstrap () {

  //const app = await NestFactory.create(MoonAppModule);
    // await app.listen(3000);
    const app = await NestFactory.createMicroservice<MicroserviceOptions>(
        MoonAppModule,
        {
            transport: Transport.REDIS,
            options: {
                host: 'localhost',
                port: 6379,
            },
        },
    )

    await app.listen()
}
bootstrap()





