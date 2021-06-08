import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Feedback } from './models/feedback';
import { FeedbackRepo } from './repo/feedback.repo';
import { FeedbackMutationResolver } from './resolvers/feedback.mutation';
import { FeedBackQueryResolver } from './resolvers/feedback.query';

@Module({
  imports: [SequelizeModule.forFeature([Feedback])],
  providers: [FeedbackMutationResolver, FeedBackQueryResolver, FeedbackRepo],
  exports: [FeedbackRepo],
})
export class FeedbackModule {}
