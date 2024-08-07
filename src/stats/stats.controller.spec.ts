import { Test, TestingModule } from '@nestjs/testing';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';
import { PeriodEnum } from './enum/period.enum';
import { createMock } from '@golevelup/ts-jest';

const STATS = [
  {
    "teamName": "Arsenal",
    "savesTier2": 0,
    "lastName": "Macey",
    "savesTier1": 0,
    "subs": 0,
    "motms": 0,
    "points": 0,
    "redCards": 0,
    "concedes": 0,
    "assists": 0,
    "shotsTier1": 0,
    "shotsTier2": 0,
    "id": 2,
    "starts": 0,
    "goals": 0,
    "tacklesTier1": 0,
    "tacklesTier2": 0,
    "ownGoals": 0,
    "cleansheets": 0,
    "penSaves": 0,
    "firstName": "Matt",
    "penMisses": 0,
    "passesTier1": 0,
    "position": "GK",
    "passesTier2": 0,
    "yellowCards": 0
  }
];

describe('StatsController', () => {
  let statsController: StatsController;
  const statsService = createMock<StatsService>()

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [StatsController],
      providers: [StatsService],
    })
    .overrideProvider(StatsService)
    .useValue(statsService)
    .compile();

    statsController = moduleRef.get<StatsController>(StatsController);
  });

  describe('getStatsForPeriod', () => {
    it('for week argument should return week stats', async () => {
      jest.spyOn(statsService, 'getStatsForWeek').mockResolvedValue({period: PeriodEnum.Week, stats: STATS});
      expect(await statsController.getStatsForPeriod({period: PeriodEnum.Week}, {weekId: 1})).toStrictEqual({period: PeriodEnum.Week, stats: STATS});
      expect(statsService.getStatsForWeek).toHaveBeenCalledTimes(1);
      expect(statsService.getStatsForWeek).toHaveBeenCalledWith(1);
    });

    it('for month argument should return month stats', async () => {
      jest.spyOn(statsService, 'getStatsForMonth').mockResolvedValue({period: PeriodEnum.Month, stats: STATS});
      expect(await statsController.getStatsForPeriod({period: PeriodEnum.Month}, {monthId: 1})).toStrictEqual({period: PeriodEnum.Month, stats: STATS});
      expect(statsService.getStatsForMonth).toHaveBeenCalledTimes(1);
      expect(statsService.getStatsForMonth).toHaveBeenCalledWith(1);
    });

    it('for season argument should return season stats', async () => {
      jest.spyOn(statsService, 'getStatsForSeason').mockResolvedValue({period: PeriodEnum.Season, stats: STATS});
      expect(await statsController.getStatsForPeriod({period: PeriodEnum.Season}, {})).toStrictEqual({period: PeriodEnum.Season, stats: STATS});
      expect(statsService.getStatsForSeason).toHaveBeenCalledTimes(1);
    });
  })
});
