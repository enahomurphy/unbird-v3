import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { Feedback } from '../models/feedback';
import { FeedbackRepo } from '../repo/feedback.repo';

@Resolver(() => Feedback)
export class FeedbackMutationResolver {
  constructor(private feedback: FeedbackRepo) {}

  private readonly logger = new Logger(FeedbackMutationResolver.name);

  @Mutation(() => Feedback)
  async createFeedback(@Args('id') id: number) {
    this.logger.log('logger');
    return this.feedback.get(id);
  }
}
