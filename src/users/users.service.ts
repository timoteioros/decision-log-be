import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import type { Database } from 'src/database/database';
import { DATABASE } from 'src/database/database.module';
import { users } from 'src/database/schema';

@Injectable()
export class UsersService {
	constructor(@Inject(DATABASE) private readonly db: Database) {}

	async getById(id: string) {
		const user = await this.db.query.users.findFirst({
			where: eq(users.id, id),
		});

		return user?.email;
	}
}
