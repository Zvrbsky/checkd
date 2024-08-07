import { Expose } from "class-transformer";

@Expose()
export class PlayerStatsModel {
    constructor(data: any) {
        Object.assign(this, data);
    }

    teamName: string;
    savesTier2: number;
    lastName: string;
    savesTier1: number;
    subs: number;
    motms: number;
    points: number;
    redCards: number;
    concedes: number;
    assists: number;
    shotsTier1: number;
    shotsTier2: number;
    id: number;
    starts: number;
    goals: number;
    tacklesTier1: number;
    tacklesTier2: number;
    ownGoals: number;
    cleansheets: number;
    penSaves: number;
    firstName: string;
    penMisses: number;
    passesTier1: number;
    position: string;
    passesTier2: number;
    yellowCards: number;
}