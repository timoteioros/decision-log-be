import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import type { CreateDecisionDto } from 'src/database/schema';
import { CreateDecisionCommand } from './commands/create-decision/create-decision-command';
import { GetDecisionQuery } from './queries/get-decision/get-decision-query';

@Controller('decisions')
export class DecisionsController {
	constructor(
		private readonly commandBus: CommandBus,
		private readonly queryBus: QueryBus,
	) {}

	@Post()
	async create(@Body() dto: CreateDecisionDto, @Req() req: Request) {
		// req.user.id
		return await this.commandBus.execute(new CreateDecisionCommand(dto));
	}

	@Get(':id')
	async get(@Param('id') id: string) {
		return await this.queryBus.execute(new GetDecisionQuery(id));
	}
}
