/* eslint-disable @typescript-eslint/camelcase */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable('user_workspaces', {
    id: 'id',
    user_id: { type: 'integer', notNull: true, references: 'users' },
    workspace_id: { type: 'integer', notNull: true, references: 'workspaces' },
    accepted: { type: 'boolean', notNull: true, default: false },
    joined_date: { type: 'timestamp', notNull: true, default: pgm.func('current_timestamp') }
  },
  { ifNotExists: true });

  pgm.createIndex('user_workspaces', ['user_id', 'workspace_id']);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('user_workspaces', { ifExists: true });
}
