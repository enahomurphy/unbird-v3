/* eslint-disable @typescript-eslint/camelcase */
import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createType('feedback_status', ['open', 'archive', 'delete']);

  pgm.createTable('feedback', {
    id: 'id',
    title: { type: 'varchar' },
    text: { type: 'varchar' },
    sentiment: { type: 'float' },
    date: { type: 'date' },
    status: { type: 'feedback_status', default: 'open' },
    external_id: { type: 'string' },
    properties:{ type: 'jsonb' },
    dataset_id: {
      type: 'integer',
      references: 'datasets',
      onDelete: 'CASCADE',
      notNull: true,
    },
  });
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('feedback');
  pgm.dropType('feedback_status');
}
