import { Injectable } from '@nestjs/common';
import type { Database } from 'src/database/db';

@Injectable()
export class DecisionRepository {
	constructor(private db: Database) {}
}
