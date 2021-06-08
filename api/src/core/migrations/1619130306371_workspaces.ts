import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable(
    'workspaces',
    {
      id: 'id',
      name: { type: 'varchar(255)', notNull: true },
      domain: { type: 'varchar(255)', notNull: true, unique: true },
      owner_id: { type: 'integer', notNull: true, references: '"users"' },
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
  pgm.createIndex('workspaces', ['owner_id', 'domain']);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('workspaces', { ifExists: true });
}
