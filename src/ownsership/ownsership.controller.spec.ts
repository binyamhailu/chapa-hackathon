import { Test, TestingModule } from '@nestjs/testing';
import { OwnsershipController } from './ownsership.controller';
import { OwnsershipService } from './ownsership.service';

describe('OwnsershipController', () => {
  let controller: OwnsershipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OwnsershipController],
      providers: [OwnsershipService],
    }).compile();

    controller = module.get<OwnsershipController>(OwnsershipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
