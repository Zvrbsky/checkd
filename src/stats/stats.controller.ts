import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { StatsService } from './stats.service';

@ApiTags('stats')
@Controller()
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('stats')
  getStatsForPeriod(): string {
    return this.statsService.getStats();
  }
}
