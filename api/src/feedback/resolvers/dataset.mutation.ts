import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { Feedback } from '../model/feedback';
import { FeedbackRepo } from '../repo/feedback.repo';



@Resolver(() => Feedback)
export class DatasetMutationResolver {
  constructor(
    private feedback: FeedbackRepo,
  ) {}

  private readonly logger = new Logger(DatasetMutationResolver.name);

  @Mutation(() => Feedback)
  async getDataset(@Args('id') id: number) {
    this.logger.log('logger');
    return this.feedback.get(id);
  }
}
