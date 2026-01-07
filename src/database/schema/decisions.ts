import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
import { decisionStatusEnum } from './enums';
import { workspaces } from './workspaces';

export const decisions = pgTable('decisions', {
	id: uuid().primaryKey().defaultRandom(),
	workspaceId: uuid('workspace_id')
		.references(() => workspaces.id)
		.notNull(),
	title: text('title').notNull(),
	context: text('context'),
	status: decisionStatusEnum('status').default('proposed').notNull(),
	chosenOption: text('chosen_option'),
	reasons: text('reasons').array(),
	consequences: text('consequences').array(),
	// createdBy: uuid('created_by').
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// -- Fast workspace lookups
// INDEX decisions_workspace_id_idx (workspace_id)

// -- Graph traversal
// INDEX decision_links_from_idx (from_decision_id)
// INDEX decision_links_to_idx   (to_decision_id)

// -- Public access
// INDEX workspaces_slug_idx (slug)
