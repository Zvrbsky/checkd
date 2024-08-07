import { Injectable } from '@nestjs/common';
import {createConnection, Connection} from 'mysql2';
import { PlayerStatsModel } from './model/player-stats.model';

@Injectable()
export class DbService {
  private connection: Connection;

  constructor() {
    this.connection = createConnection({
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
  }

  async getStatsForSeason(): Promise<PlayerStatsModel[]> {
    const players: any[] = await new Promise((resolve, reject) => {
      this.connection.query(`
        SELECT teams.name as teamName, savesTier2, lastName, savesTier1, subs, motms, points, redCards, concedes, assists, shotsTier1, shotsTier2, players.id, starts, goals, tacklesTier1, tacklesTier2, ownGoals, cleansheets, penSaves, firstName, penMisses, passesTier1, position, passesTier2, yellowCards 
        FROM seasonPlayers
        LEFT JOIN players
        ON seasonPlayers.playerId = players.id
        LEFT JOIN teams
        ON players.teamId = teams.id;
      `,
        [],
        (err, res) => {
          if (err) reject(err);
          else resolve(res as any[]);
        }
      )
    });
    
    return players.map((player) => new PlayerStatsModel(player));
  }

  async getStatsForWeek(weekId: number): Promise<PlayerStatsModel[]> {
    const players: any[] = await new Promise((resolve, reject) => {
      this.connection.query(`
        SELECT teams.name as teamName, savesTier2, lastName, savesTier1, subs, motms, points, redCards, concedes, assists, shotsTier1, shotsTier2, players.id, starts, goals, tacklesTier1, tacklesTier2, ownGoals, cleansheets, penSaves, firstName, penMisses, passesTier1, position, passesTier2, yellowCards 
        FROM weekPlayers
        LEFT JOIN players
        ON weekPlayers.playerId = players.id
        LEFT JOIN teams
        ON players.teamId = teams.id
        WHERE weekPlayers.weekId = ${weekId};
      `,
        [],
        (err, res) => {
          if (err) reject(err);
          else resolve(res as any[]);
        }
      )
    });
    
    return players.map((player) => new PlayerStatsModel(player));
  }

  async getStatsForMonth(monthId: number): Promise<PlayerStatsModel[]> {
    const players: any[] = await new Promise((resolve, reject) => {
      this.connection.query(`
        SELECT teams.name as teamName, savesTier2, lastName, savesTier1, subs, motms, points, redCards, concedes, assists, shotsTier1, shotsTier2, players.id, starts, goals, tacklesTier1, tacklesTier2, ownGoals, cleansheets, penSaves, firstName, penMisses, passesTier1, position, passesTier2, yellowCards 
        FROM monthPlayers
        LEFT JOIN players
        ON monthPlayers.playerId = players.id
        LEFT JOIN teams
        ON players.teamId = teams.id
        WHERE monthPlayers.monthId = ${monthId};
      `,
        [],
        (err, res) => {
          if (err) reject(err);
          else resolve(res as any[]);
        }
      )
    });
    
    return players.map((player) => new PlayerStatsModel(player));
  }
}
