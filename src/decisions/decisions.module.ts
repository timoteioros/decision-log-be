import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { CreateDecisionHandler } from './commands/create-decision/create-decision-handler';
import { DecisionsController } from './decisions.controller';
import { DecisionsRepository } from './decisions.repository';
import { GetDecisionHandler } from './queries/get-decision/get-decision-handler';

@Module({
	imports: [DatabaseModule],
	controllers: [DecisionsController],
	providers: [DecisionsRepository, GetDecisionHandler, CreateDecisionHandler],
})
export class DecisionsModule {}
