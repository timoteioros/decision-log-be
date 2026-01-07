import { pgTable, timestamp, uuid } from 'drizzle-orm/pg-core';
import { decisions } from './decisions';
import { decisionLinkTypeEnum } from './enums';

export const decisionLinks = pgTable('decision_links', {
	id: uuid('id').primaryKey().defaultRandom(),
	fromDecisionId: uuid('from_decision_id')
		.references(() => decisions.id, { onDelete: 'cascade' })
		.notNull(),
	toDecisionId: uuid('to_decision_id')
		.references(() => decisions.id, { onDelete: 'cascade' })
		.notNull(),
	type: decisionLinkTypeEnum('type').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
});
