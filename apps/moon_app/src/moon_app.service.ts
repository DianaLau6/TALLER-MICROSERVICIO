import { Injectable } from '@nestjs/common';

@Injectable()
export class MoonAppService {
  getHello(): string {
    return 'Microservicio Moon';
  }
}
