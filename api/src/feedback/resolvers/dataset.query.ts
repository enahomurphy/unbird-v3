import { Args, Resolver, Query } from '@nestjs/graphql';
import { Logger,  } from '@nestjs/common';
import { Feedback } from '../model/feedback';
import { FeedbackRepo } from '../repo/feedback.repo';


@Resolver(() => Feedback)
export class DatasetQueryResolver {
  constructor(
    private feedback: FeedbackRepo,
  ) {}

  private readonly logger = new Logger(DatasetQueryResolver.name);

  @Query(() => Feedback)
  async getFeedback(@Args('id') id: number) {
    this.logger.log('logger');
    return this.feedback.get(id);
  }
}
