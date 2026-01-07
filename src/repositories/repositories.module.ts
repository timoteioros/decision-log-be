import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserRepository } from './user.repository';
import { DecisionRepository } from './decision.repository';

@Module({
	imports: [DatabaseModule],
	providers: [UserRepository, DecisionRepository],
	exports: [UserRepository, DecisionRepository],
})
export class RepositoriesModdule {}
