import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { workspaceVisibilityEnum } from './enums';

export const workspaces = pgTable('workspaces', {
	id: uuid().primaryKey().defaultRandom(),
	name: text('name').notNull(),
	slug: text('slug').notNull().unique(),
	visibility: workspaceVisibilityEnum('visibility')
		.default('private')
		.notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});
