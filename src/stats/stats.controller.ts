import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { StatsService } from './stats.service';
import { PeriodDto } from './dto/period.dto';
import { PeriodEnum } from './enum/period.enum';
import { PeriodDetailsDto } from './dto/period-details.dto';

@ApiTags('stats')
@Controller()
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('stats/:period')
  @ApiOkResponse()
  getStatsForPeriod(@Param() params: PeriodDto, @Query() query: PeriodDetailsDto): string {
    switch (params.period) {
      case PeriodEnum.Week:
        return this.statsService.getStatsForWeek(query.weekId)
      case PeriodEnum.Month:
        return this.statsService.getStatsForMonth(query.monthId)
      case PeriodEnum.Season:
        return this.statsService.getStatsForSeason()

    }
  }
}
