import { Expose } from "class-transformer";
import { PeriodEnum } from "../enum/period.enum";
import { PlayerStatsModel } from "src/db/model/player-stats.model";
import { ApiProperty } from "@nestjs/swagger";

@Expose()
export class StatsDto {
    @ApiProperty({example: 'week'})
    period: PeriodEnum;
    @ApiProperty({isArray: true, type: PlayerStatsModel})
    stats: PlayerStatsModel[]
}