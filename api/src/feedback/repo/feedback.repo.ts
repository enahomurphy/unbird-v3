import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Feedback } from '../models/feedback';


@Injectable()
export class FeedbackRepo {
  constructor(
    @InjectModel(Feedback)
    private feedback: typeof Feedback,
  ) {}
  get(id: number): Promise<Feedback> {
    return this.feedback.findByPk(id);
  }

}
