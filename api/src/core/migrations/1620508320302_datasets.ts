/* eslint-disable @typescript-eslint/camelcase */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createType('source_type', [
    'app_store',
    'play_store',
    'slack',
    'csv',
    'api',
    'zapier',
    'pendo',
    'zendesk',
  ]);

  pgm.createTable(
    'datasets',
    {
      id: 'id',
      source_type: { type: 'source_type', notNull: true },
      creator_id: { type: 'int', notNull: true },
      workspace_id: {
        type: 'int',
        notNull: true,
        references: 'workspaces',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
      updated_at: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
    },
    { ifNotExists: true },
  );
}

export async function down(pgm: MigrationBuilder): Promise<void> {}
