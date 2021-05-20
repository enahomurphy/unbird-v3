import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Feedback } from './models/feedback'
import { FeedbackRepo } from './repo/feedback.repo';
import { DatasetMutationResolver } from './resolvers/dataset.mutation';
import { DatasetQueryResolver } from './resolvers/dataset.query';

@Module({
  imports: [
    SequelizeModule.forFeature([Feedback]),
  ],
  providers: [DatasetMutationResolver, DatasetQueryResolver, FeedbackRepo],
  exports: [FeedbackRepo],
})

export class FeedbackModule {}
