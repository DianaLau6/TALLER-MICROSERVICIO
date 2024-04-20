import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User} from '../../moonlight/src/entities/user.entity';

@Injectable()
export class MoonAppService {
  constructor(
    @InjectRepository( User)
    private readonly yourEntityRepository: Repository<User>,
  ) {}

  getHello(): string {
    return 'Microservicio Moon';
  }

  async addDataToDatabase(data: any) {
    // Crea una instancia de la entidad y guarda los datos en la base de datos
    const newData = this.yourEntityRepository.create(data);
    return this.yourEntityRepository.save(newData);
  }
}