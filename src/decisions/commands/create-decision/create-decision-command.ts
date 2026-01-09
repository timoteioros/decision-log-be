import { Command } from '@nestjs/cqrs';
import type { CreateDecisionDto, DecisionDto } from 'src/database/schema';

export class CreateDecisionCommand extends Command<DecisionDto> {
	constructor(public readonly dto: CreateDecisionDto) {
		super();
	}
}
