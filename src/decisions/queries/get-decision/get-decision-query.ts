import { Query } from '@nestjs/cqrs';
import type { DecisionDto } from 'src/database/schema';

export class GetDecisionQuery extends Query<DecisionDto | undefined> {
	constructor(public readonly queryId: string) {
		super();
	}
}
