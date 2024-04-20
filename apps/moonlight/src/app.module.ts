import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/User.entity'; // Asumiendo que la entidad se encuentra en este directorio
import { UserService } from './services/user.service';
import { UsersModule } from './module/user.module';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [
    ClientsModule.register([
      { 
        name: 'MOON_SERVICE', 
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6379,
        }
      }
    ]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'moon',
      entities: [User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User]),
    UsersModule 
  ],
  controllers: [AppController],
  providers: [AppService, UserService,]
})
export class AppModule {}