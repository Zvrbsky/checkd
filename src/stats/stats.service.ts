import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { StatsDto } from './dto/stats.dto';
import { PeriodEnum } from './enum/period.enum';

@Injectable()
export class StatsService {
  constructor(private readonly dbService: DbService) {}

  getStatsForWeek(weekId: number): string {
    return 'Week!';
  }
  getStatsForMonth(monthId: number): string {
    return 'Month!';
  }
  async getStatsForSeason(): Promise<StatsDto> {
    return {
      period: PeriodEnum.Season,
      stats: await this.dbService.getStatsForSeason()
    };
  }
}
