import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
	id: uuid('id').primaryKey().defaultRandom(),
	email: text('email').notNull().unique(),
	name: text('name'),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});

export type UserDto = typeof users.$inferSelect;
export type CreateUserDto = typeof users.$inferInsert;
