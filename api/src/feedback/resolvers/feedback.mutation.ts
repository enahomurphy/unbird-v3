import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { Feedback } from '../models/feedback';
import { FeedbackRepo } from '../repo/feedback.repo';
import { FeedbackService } from '../service/feedback.service';
import { reviews } from 'test/data/google';
import { DataTypes } from 'src/core/types/enums/datatypes.enum';
import { FeedbackMappings } from '../types';

@Resolver(() => Feedback)
export class FeedbackMutationResolver {
  constructor(
    private feedback: FeedbackRepo,
    private feedbackService: FeedbackService,
  ) {}

  private readonly logger = new Logger(FeedbackMutationResolver.name);

  @Mutation(() => Feedback)
  async createFeedback(@Args('id') id: number) {
    const data = reviews().data as Record<string, any>[];

    const mappings: FeedbackMappings = [
      {
        keyPath: 'id',
        mapKeyTo: 'external_id',
        dataType: DataTypes.STRING,
      },
      {
        keyPath: 'text',
        mapKeyTo: 'text',
        dataType: DataTypes.STRING,
      },
      {
        keyPath: 'title',
        mapKeyTo: 'title',
        dataType: DataTypes.STRING,
      },
      {
        keyPath: 'date',
        mapKeyTo: 'date',
        dataType: DataTypes.DATE,
      },
      {
        keyPath: 'criterias[0].rating',
        mapKeyTo: 'rating',
        dataType: DataTypes.NUMBER,
      },
      {
        keyPath: 'thumbsUp',
        mapKeyTo: 'status',
        dataType: DataTypes.NUMBER,
      },
    ];

    const ignore = [
      'userName',
      'replyDate',
      'replyText',
      'version',
      'criterias',
      'scoreText',
      'score',
      'userImage',
      'url',
    ];

    const feedback = this.feedbackService?.prepare(data, mappings, ignore);
    this.logger.log(JSON.stringify(feedback, null, ' '));

    return this.feedback.get(id);
  }
}
