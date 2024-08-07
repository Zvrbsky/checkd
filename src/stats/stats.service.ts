import { Injectable } from '@nestjs/common';

@Injectable()
export class StatsService {
  getStats(): string {
    return 'Stats!';
  }
}
