import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CqrsModule } from '@nestjs/cqrs';
import { DatabaseModule } from './database/database.module';
import { DecisionsModule } from './decisions/decisions.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		CqrsModule.forRoot(),
		DatabaseModule,
		DecisionsModule,
	],
})
export class AppModule {}
