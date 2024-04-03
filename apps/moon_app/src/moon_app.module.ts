import { Module } from '@nestjs/common';
import { MoonAppController } from './moon_app.controller';
import { MoonAppService } from './moon_app.service';

@Module({
  imports: [],
  controllers: [MoonAppController],
  providers: [MoonAppService],
})
export class MoonAppModule {}
