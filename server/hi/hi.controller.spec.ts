import { Test, TestingModule } from '@nestjs/testing';
import { HiController } from './hi.controller';

describe('Hi Controller', () => {
  let controller: HiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HiController],
    }).compile();

    controller = module.get<HiController>(HiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
