import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable(
    'users',
    {
      id: 'id',
      first_name: { type: 'varchar(255)', notNull: true },
      last_name: { type: 'varchar(255)', notNull: true },
      email: { type: 'varchar(1000)', notNull: true, unique: true },
      password: { type: 'varchar(1000)', notNull: true },
      is_verified: { type: 'boolean', notNull: true, default: false },
      avatar: { type: 'varchar(255)', notNull: false },
      job_title: { type: 'varchar(255)', notNull: true },
      last_active: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
      failed_login: { type: 'integer', notNull: false },
      reset_token: { type: 'varchar(255)', notNull: false },
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

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('users', { ifExists: true });
}
