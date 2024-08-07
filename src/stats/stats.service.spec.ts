import { Test, TestingModule } from '@nestjs/testing';
import { StatsService } from './stats.service';
import { PeriodEnum } from './enum/period.enum';
import { DbService } from '../db/db.service';
import { createMock } from '@golevelup/ts-jest';
import { BadRequestException } from '@nestjs/common';

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

describe('StatsService', () => {
  let statsService: StatsService;
  let dbService = createMock<DbService>();

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [],
      providers: [StatsService, DbService],
    })
    .overrideProvider(DbService)
    .useValue(dbService)
    .compile();

    statsService = moduleRef.get<StatsService>(StatsService);
  });

  describe('getStatsForSeason', () => {
    it('should return stats from db', async () => {
      jest.spyOn(dbService, 'getStatsForSeason').mockResolvedValue(STATS);
      expect(await statsService.getStatsForSeason()).toStrictEqual({
        period: PeriodEnum.Season,
        stats: STATS
      });
      expect(dbService.getStatsForSeason).toHaveBeenCalledTimes(1);
    });
  })

  describe('getStatsForWeek', () => {
    it('should return stats from db', async () => {
      jest.spyOn(dbService, 'getStatsForWeek').mockResolvedValue(STATS);
      expect(await statsService.getStatsForWeek(1)).toStrictEqual({
        period: PeriodEnum.Week,
        stats: STATS
      });
      expect(dbService.getStatsForWeek).toHaveBeenCalledTimes(1);
      expect(dbService.getStatsForWeek).toHaveBeenCalledWith(1);
    });

    it('should throw if not weekId provided', async () => {
      await expect(statsService.getStatsForWeek()).rejects.toThrow(BadRequestException);
    });
  })

  describe('getStatsForMonth', () => {
    it('should return stats from db', async () => {
      jest.spyOn(dbService, 'getStatsForMonth').mockResolvedValue(STATS);
      expect(await statsService.getStatsForMonth(1)).toStrictEqual({
        period: PeriodEnum.Month,
        stats: STATS
      });
      expect(dbService.getStatsForMonth).toHaveBeenCalledTimes(1);
      expect(dbService.getStatsForMonth).toHaveBeenCalledWith(1);
    });

    it('should throw if not weekId provided', async () => {
      await expect(statsService.getStatsForMonth()).rejects.toThrow(BadRequestException);
    });
  })
});
