import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { workspaces } from './workspaces';
import { users } from './users';
import { memberRoleEnum } from './enums';

export const workspaceMembers = pgTable('workspace_members', {
	id: uuid('id').primaryKey().defaultRandom(),
	workspaceId: uuid('workspace_id')
		.references(() => workspaces.id, {
			onDelete: 'cascade',
		})
		.notNull(),
	usedId: uuid('user_id')
		.references(() => users.id, { onDelete: 'cascade' })
		.notNull(),
	role: memberRoleEnum('role').default('owner').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});
