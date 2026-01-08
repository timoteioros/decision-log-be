import { Controller, Get } from '@nestjs/common';
import type { UsersService } from 'src/users/users.service';

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}
	@Get()
	async getUsers() {
		return await this.userService.getById(
			'7287616b-226c-4aca-be71-005734e09e8b',
		);
	}
}
