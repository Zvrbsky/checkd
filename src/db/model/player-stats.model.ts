import { ApiProperty } from "@nestjs/swagger";
import { Expose } from "class-transformer";

@Expose()
export class PlayerStatsModel {
    constructor(data: any) {
        Object.assign(this, data);
    }

    @ApiProperty()
    teamName: string;
    @ApiProperty()
    savesTier2: number;
    @ApiProperty()
    lastName: string;
    @ApiProperty()
    savesTier1: number;
    @ApiProperty()
    subs: number;
    @ApiProperty()
    motms: number;
    @ApiProperty()
    points: number;
    @ApiProperty()
    redCards: number;
    @ApiProperty()
    concedes: number;
    @ApiProperty()
    assists: number;
    @ApiProperty()
    shotsTier1: number;
    @ApiProperty()
    shotsTier2: number;
    @ApiProperty()
    id: number;
    @ApiProperty()
    starts: number;
    @ApiProperty()
    goals: number;
    @ApiProperty()
    tacklesTier1: number;
    @ApiProperty()
    tacklesTier2: number;
    @ApiProperty()
    ownGoals: number;
    @ApiProperty()
    cleansheets: number;
    @ApiProperty()
    penSaves: number;
    @ApiProperty()
    firstName: string;
    @ApiProperty()
    penMisses: number;
    @ApiProperty()
    passesTier1: number;
    @ApiProperty()
    position: string;
    @ApiProperty()
    passesTier2: number;
    @ApiProperty()
    yellowCards: number;
}