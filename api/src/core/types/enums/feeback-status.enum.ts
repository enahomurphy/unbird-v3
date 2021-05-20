import { registerEnumType } from '@nestjs/graphql';

export enum FeedbackStatus {
  ARCHIVE = 'archive',
  DELETE = 'delete',
  OPEN = 'open',
}

registerEnumType(FeedbackStatus, {
  name: 'FeedbackStatus',
  description: 'Feedback status',
});