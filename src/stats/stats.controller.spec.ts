import { Test, TestingModule } from '@nestjs/testing';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
import { PeriodEnum } from './enum/period.enum';

describe('StatsController', () => {
  let statsController: StatsController;
  let statsService: StatsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [StatsController],
      providers: [StatsService],
    }).compile();

    statsService = moduleRef.get<StatsService>(StatsService);
    statsController = moduleRef.get<StatsController>(StatsController);
  });

  describe('getStatsForPeriod', () => {
    it('for week argument should return week stats', () => {
      jest.spyOn(statsService, 'getStatsForWeek').mockReturnValue('Week!');
      expect(statsController.getStatsForPeriod({period: PeriodEnum.Week}, {weekId: 1})).toBe('Week!');
      expect(statsService.getStatsForWeek).toHaveBeenCalledTimes(1);
      expect(statsService.getStatsForWeek).toHaveBeenCalledWith(1);
    });

    it('for month argument should return month stats', () => {
      jest.spyOn(statsService, 'getStatsForMonth').mockReturnValue('Month!');
      expect(statsController.getStatsForPeriod({period: PeriodEnum.Month}, {monthId: 1})).toBe('Month!');
      expect(statsService.getStatsForMonth).toHaveBeenCalledTimes(1);
      expect(statsService.getStatsForMonth).toHaveBeenCalledWith(1);
    });

    it('for season argument should return season stats', () => {
      jest.spyOn(statsService, 'getStatsForSeason').mockReturnValue('Season!');
      expect(statsController.getStatsForPeriod({period: PeriodEnum.Season}, {})).toBe('Season!');
      expect(statsService.getStatsForSeason).toHaveBeenCalledTimes(1);
    });
  })
});
