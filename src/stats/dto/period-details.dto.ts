import { ApiPropertyOptional } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsNumber, IsOptional, Max, Min } from "class-validator";

export class PeriodDetailsDto {
    @ApiPropertyOptional({description: "When period set to 'week' - specifies the ID of the week to return [1-37]"})
    @IsNumber()
    @IsOptional()
    @Min(1)
    @Max(37)
    weekId?: number

    @ApiPropertyOptional({description: "When period set to 'month' - specifies the ID of the month to return [1-12]"})
    @IsNumber()
    @IsOptional()
    @Min(1)
    @Max(12)
    monthId?: number
}