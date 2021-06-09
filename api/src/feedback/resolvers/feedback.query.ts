import { Args, Resolver, Query } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { Feedback } from '../models/feedback';
import { FeedbackRepo } from '../repo/feedback.repo';

@Resolver(() => Feedback)
export class FeedBackQueryResolver {
  constructor(private feedback: FeedbackRepo) {}

  private readonly logger = new Logger(FeedBackQueryResolver.name);

  @Query(() => Feedback)
  async getFeedback(@Args('id') id: number) {
    return this.feedback.get(id);
  }
}
