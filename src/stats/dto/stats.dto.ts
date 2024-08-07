import { Expose } from "class-transformer";
import { PeriodEnum } from "../enum/period.enum";
import { PlayerStatsModel } from "src/db/model/player-stats.model";

@Expose()
export class StatsDto {
    period: PeriodEnum;
    stats: PlayerStatsModel[]
}