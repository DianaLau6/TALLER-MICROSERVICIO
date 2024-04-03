import { Test, TestingModule } from '@nestjs/testing';
import { MoonAppController } from './moon_app.controller';
import { MoonAppService } from './moon_app.service';

describe('MoonAppController', () => {
  let moonAppController: MoonAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [MoonAppController],
      providers: [MoonAppService],
    }).compile();

    moonAppController = app.get<MoonAppController>(MoonAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(moonAppController.getHello()).toBe('Hello World!');
    });
  });
});
