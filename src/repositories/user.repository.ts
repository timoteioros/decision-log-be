import { Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import type { Database } from 'src/database/db';
import { users } from 'src/database/schema';

@Injectable()
export class UserRepository {
	constructor(private db: Database) {}

	async findById(id: string) {
		return this.db.query.users.findFirst({
			where: eq(users.id, id),
		});
	}
}
