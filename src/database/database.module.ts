import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { drizzle, type NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema/index';

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
