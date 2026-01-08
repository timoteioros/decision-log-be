import { Module } from '@nestjs/common';
import * as schema from './schema/index';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';

export const DATABASE = Symbol('DATABASE');

@Module({
	providers: [
		{
			provide: DATABASE,
			inject: [ConfigService],
			useFactory: (configService: ConfigService) => {
				const databaseUrl = configService.get<string>('DATABASE_URL');
				const pool = new Pool({
					connectionString: databaseUrl,
					ssl: true,
				});

				return drizzle(pool, { schema }) as NodePgDatabase<typeof schema>;
			},
		},
	],
	exports: [DATABASE],
})
export class DatabaseModule {}
