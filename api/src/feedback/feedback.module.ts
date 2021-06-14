import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { FeedbackService } from 'src/feedback/service/feedback.service';

import { Feedback } from './models/feedback';
import { FeedbackRepo } from './repo/feedback.repo';
import { FeedbackMutationResolver } from './resolvers/feedback.mutation';
import { FeedBackQueryResolver } from './resolvers/feedback.query';

@Module({
  imports: [SequelizeModule.forFeature([Feedback])],
  providers: [
    FeedbackMutationResolver,
    FeedBackQueryResolver,
    FeedbackRepo,
    FeedbackService,
  ],
  exports: [FeedbackRepo],
})
export class FeedbackModule {}
