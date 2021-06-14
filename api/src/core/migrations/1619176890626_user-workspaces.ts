import { MigrationBuilder, ColumnDefinitions } from 'node-pg-migrate';

export const shorthands: ColumnDefinitions | undefined = undefined;

export async function up(pgm: MigrationBuilder): Promise<void> {
  pgm.createTable(
    'user_workspaces',
    {
      id: 'id',
      user_id: { type: 'integer', notNull: true, references: 'users' },
      workspace_id: {
        type: 'integer',
        notNull: true,
        references: 'workspaces',
      },
      accepted: { type: 'boolean', notNull: true, default: false },
      joined_date: {
        type: 'timestamp',
        notNull: true,
        default: pgm.func('current_timestamp'),
      },
    },
    { ifNotExists: true },
  );

  pgm.createIndex('user_workspaces', ['user_id', 'workspace_id']);
}

export async function down(pgm: MigrationBuilder): Promise<void> {
  pgm.dropTable('user_workspaces', { ifExists: true });
}

const t = {
  data: [
    {
      id: 'gp:AOqpTOFmAVORqfWGcaqfF39ftwFjGkjecjvjXnC3g_uL0NtVGlrrqm8X2XUWx0WydH3C9afZlPUizYVZAfARLuk',
      userName: 'Inga El-Ansary',
      userImage:
        'https://lh3.googleusercontent.com/-hBGvzn3XlhQ/AAAAAAAAAAI/AAAAAAAAOw0/L4GY9KrQ-DU/w96-c-h96/photo.jpg',
      date: '2013-11-10T18:31:42.174Z',
      score: 5,
      scoreText: '5',
      url: 'https://play.google.com/store/apps/details?id=com.dxco.pandavszombies&reviewId=Z3A6QU9xcFRPRWZaVHVZZ081NlNsRW9TV0hJeklGSTBvYTBTUlFQUUJIZThBSGJDX2s1Y1o0ZXRCbUtLZmgzTE1PMUttRmpRSS1YcFgxRmx1ZXNtVzlVS0Zz',
      title: 'I LOVE IT',
      text: 'It has skins and snowballs everything I wanted its so cool I love it!!!!!!!!',
      replyDate: '2013-11-10T18:31:42.174Z',
      replyText: 'thanks for playing Panda vs Zombies!',
      version: '1.0.2',
      thumbsUp: 29,
      criterias: [
        {
          criteria: 'vaf_games_simple',
          rating: 1,
        },
        {
          criteria: 'vaf_games_realistic',
          rating: 1,
        },
        {
          criteria: 'vaf_games_complex',
          rating: 1,
        },
      ],
    },
    {
      id: 'gp:AOqpTOF39mpW-6gurlkCCTV_8qnKne7O5wcFsLc6iGVot5hHpplqPCqIiVL2fjximXNujuMjwQ4pkizxGrn13x0',
      userName: 'Millie Hawthorne',
      userImage:
        'https://lh5.googleusercontent.com/-Q_FTAEBH2Qg/AAAAAAAAAAI/AAAAAAAAAZk/W5dTdaHCUE4/w96-c-h96/photo.jpg',
      date: '2013-11-10T18:31:42.174Z',
      url: 'https://play.google.com/store/apps/details?id=com.dxco.pandavszombies&reviewId=Z3A6QU9xcFRPRmFHdlBFS2pGS2JVYW5Dd3kxTm1qUzRxQlYyc3Z4ZE9CYXRuc0hkclV3a09hbEFkOVdoWmw3eFN5VjF4cDJPLTg5TW5ZUjl1Zm9HOWc5NGtr',
      score: 5,
      scoreText: '5',
      title: 'CAN NEVER WAIT TILL NEW UPDATE',
      text: 'Love it but needs to pay more attention to pocket edition',
      replyDate: null,
      replyText: null,
      version: null,
      thumbsUp: 29,
      criterias: [],
    },
  ],
  nextPaginationToken: 'NEXT_PAGINATION_TOKEN',
};
