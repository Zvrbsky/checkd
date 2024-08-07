import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { StatsService } from './stats.service';
import { PeriodDto } from './dto/period.dto';
import { PeriodEnum } from './enum/period.enum';
import { PeriodDetailsDto } from './dto/period-details.dto';
import { StatsDto } from './dto/stats.dto';

@ApiTags('stats')
@Controller()
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  @Get('stats/:period')
  @ApiOkResponse()
  @ApiBadRequestResponse()
  getStatsForPeriod(@Param() params: PeriodDto, @Query() query: PeriodDetailsDto): Promise<StatsDto> {
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
