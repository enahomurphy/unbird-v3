import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.sql('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropExtension('uuid-ossp');
}
