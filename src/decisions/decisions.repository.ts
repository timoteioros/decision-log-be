import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import type { Database } from 'src/database/database';
import { DATABASE } from 'src/database/database.module';
import {
	type CreateDecisionDto,
	type DecisionDto,
	decisions,
} from 'src/database/schema';

@Injectable()
export class DecisionsRepository {
	constructor(@Inject(DATABASE) private readonly db: Database) {}

	create(dto: CreateDecisionDto): Promise<DecisionDto> {
		return this.db
			.insert(decisions)
			.values(dto)
			.returning()
			.then(([insertedDto]) => insertedDto);
	}

	findById(id: string): Promise<DecisionDto | undefined> {
		return this.db.query.decisions.findFirst({
			where: (decisions) => eq(decisions.id, id),
		});
	}
}
