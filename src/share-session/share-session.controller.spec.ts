import { Test, TestingModule } from '@nestjs/testing';
import { ShareSessionController } from './share-session.controller';
import { ShareSessionService } from './share-session.service';

describe('ShareSessionController', () => {
  let controller: ShareSessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShareSessionController],
      providers: [ShareSessionService],
    }).compile();

    controller = module.get<ShareSessionController>(ShareSessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
