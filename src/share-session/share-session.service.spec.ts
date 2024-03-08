import { Test, TestingModule } from '@nestjs/testing';
import { ShareSessionService } from './share-session.service';

describe('ShareSessionService', () => {
  let service: ShareSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShareSessionService],
    }).compile();

    service = module.get<ShareSessionService>(ShareSessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
