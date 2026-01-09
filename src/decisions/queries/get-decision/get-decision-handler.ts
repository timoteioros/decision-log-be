import { type IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { DecisionsRepository } from 'src/decisions/decisions.repository';
import { GetDecisionQuery } from './get-decision-query';

@QueryHandler(GetDecisionQuery)
export class GetDecisionHandler implements IQueryHandler<GetDecisionQuery> {
	constructor(private readonly decisionsRepository: DecisionsRepository) {}

	async execute(query: GetDecisionQuery) {
		return await this.decisionsRepository.findById(query.queryId);
	}
}
