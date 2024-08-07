import { BadRequestException, Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { StatsDto } from './dto/stats.dto';
import { PeriodEnum } from './enum/period.enum';

@Injectable()
export class StatsService {
  constructor(private readonly dbService: DbService) {}

  async getStatsForWeek(weekId?: number): Promise<StatsDto> {
    if (weekId === undefined) {
      throw new BadRequestException('weekId not provided for week stats request');
    }
    return {
      period: PeriodEnum.Week,
      stats: await this.dbService.getStatsForWeek(weekId)
    };
  }
  async getStatsForMonth(monthId?: number): Promise<StatsDto> {
    if (monthId === undefined) {
      throw new BadRequestException('monthId not provided for week stats request');
    }
    return {
      period: PeriodEnum.Week,
      stats: await this.dbService.getStatsForMonth(monthId)
    };
  }
  async getStatsForSeason(): Promise<StatsDto> {
    return {
      period: PeriodEnum.Season,
      stats: await this.dbService.getStatsForSeason()
    };
  }
}
