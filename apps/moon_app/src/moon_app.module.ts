import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
import { MoonAppController } from './moon_app.controller';
import { MoonAppService } from './moon_app.service';
import { User} from '../../moonlight/src/entities/user.entity'; // Importa la entidad UserEntity desde moonlight

@Module({
  imports: [
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
    TypeOrmModule.forFeature([User]), // Registra la entidad UserEntity para que esté disponible en este módulo
  ],
  controllers: [MoonAppController],
  providers: [MoonAppService],
})
export class MoonAppModule {}
