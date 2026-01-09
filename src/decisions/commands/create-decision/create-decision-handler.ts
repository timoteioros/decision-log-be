import { CommandHandler, type ICommandHandler } from '@nestjs/cqrs';
import { DecisionsRepository } from 'src/decisions/decisions.repository';
import { CreateDecisionCommand } from './create-decision-command';

@CommandHandler(CreateDecisionCommand)
export class CreateDecisionHandler
	implements ICommandHandler<CreateDecisionCommand>
{
	constructor(private readonly decisionsRepository: DecisionsRepository) {}

	async execute(command: CreateDecisionCommand) {
		const decision = await this.decisionsRepository.create(command.dto);

		// eventBus.publish(new DecisionCreatedEvent());

		return decision;
	}
}
