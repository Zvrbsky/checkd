import { Test, TestingModule } from '@nestjs/testing';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

describe('AppController', () => {
  let statsController: StatsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StatsController],
      providers: [StatsService],
    }).compile();

    statsController = app.get<StatsController>(StatsController);
  });

  describe('StatsController', () => {
    it('should return "Hello World!"', () => {
      expect(statsController.getStatsForPeriod()).toBe('Stats!');
    });
  });
});
