import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [ConfigModule.forRoot(), DbModule, StatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
