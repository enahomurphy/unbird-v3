import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { FeedbackStatus } from 'src/core/types/enums/feeback-status.enum';

@ObjectType()
@Table({ modelName: 'feedback', timestamps: false, updatedAt: false })
export class Feedback extends Model {
  @Field(() => Int, { nullable: true })
  id?: string;

  @Field(() => Int, { nullable: true })
  @Column({
    type: DataType.INTEGER,
    field: 'dataset_id'
  })
  datasetId?: number;

  @Field(() => Int, { nullable: true })
  @Column({
    type: DataType.INTEGER,
    field: 'workspace_id'
  })
  workspaceId?: number;

  @Field(() => Int, { nullable: true })
  @Column({
    type: DataType.INTEGER,
    field: 'creator_id'
  })
  creatorId?: number;


  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.TEXT,
    field: 'title'
  })
  title?: string;


  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.TEXT,
    field: 'text'
  })
  text?: string;

  @Field(() => Float, { nullable: true })
  @Column({
    type: DataType.FLOAT,
    field: 'sentiment'
  })
  sentiment?: number;

  @Field(() => Date, { nullable: true })
  @Column({
    type: DataType.DATE,
    field: 'date'
  })
  date?: Date;

  @Field(() => FeedbackStatus)
  @Column({
    type: DataType.ENUM<FeedbackStatus>(
      FeedbackStatus.ARCHIVE,
      FeedbackStatus.DELETE,
      FeedbackStatus.OPEN,
    ),
    field: 'status'
  })
  status?: FeedbackStatus;

  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.STRING,
    field: 'external_id'
  })
  externalId?: string;


  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.JSONB,
    field: 'properties'
  })
  properties?: String;


  @Field(() => Date, { nullable: true })
  @Column({
    type: DataType.DATE,
    field: 'created_at',
  })
  createdAt?: string;

  @Field(() => Date, { nullable: true })
  @Column({
    type: DataType.DATE,
    field: 'updated_at',
  })
  updatedAt?: string;
}
