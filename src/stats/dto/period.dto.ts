import { ApiProperty } from "@nestjs/swagger";
import { PeriodEnum } from "../enum/period.enum";
import { IsEnum } from "class-validator";

export class PeriodDto {

    @ApiProperty({
        enum: Object.values(PeriodEnum).filter(x => typeof x === 'string'),
        description: 'Time frame requested'
    })
    @IsEnum(PeriodEnum)
    period: PeriodEnum
}