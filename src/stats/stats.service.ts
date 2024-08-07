import { Injectable } from '@nestjs/common';

@Injectable()
export class StatsService {
  getStatsForWeek(weekId: number): string {
    return 'Week!';
  }
  getStatsForMonth(monthId: number): string {
    return 'Month!';
  }
  getStatsForSeason(): string {
    return 'Season!';
  }
}
