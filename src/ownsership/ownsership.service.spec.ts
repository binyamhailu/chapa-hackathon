import { Test, TestingModule } from '@nestjs/testing';
import { OwnsershipService } from './ownsership.service';

describe('OwnsershipService', () => {
  let service: OwnsershipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OwnsershipService],
    }).compile();

    service = module.get<OwnsershipService>(OwnsershipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
