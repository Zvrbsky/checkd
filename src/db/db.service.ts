import { Injectable } from '@nestjs/common';
import {createConnection, Connection} from 'mysql2';

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
}
