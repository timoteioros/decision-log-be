import { pgEnum } from 'drizzle-orm/pg-core';

export const workspaceVisibilityEnum = pgEnum('workspace_visibility', [
	'public',
	'private',
]);

export const decisionStatusEnum = pgEnum('decision_status', [
	'proposed',
	'approved',
	'rejected',
]);

export const decisionLinkTypeEnum = pgEnum('decision_link_type', [
	'depends_on',
	'influences',
	'conflicts_with',
]);

export const memberRoleEnum = pgEnum('member_role', ['owner']);
