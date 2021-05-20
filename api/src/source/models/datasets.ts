import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SourceType } from 'src/core/types/enums/source-types.enum';

@ObjectType()
@Table({ modelName: 'datasets', timestamps: false, updatedAt: false })
export class Dataset extends Model {
  @Field(() => Int, { nullable: true })
  id?: string;

  @Field(() => SourceType)
  @Column({
    type: DataType.ENUM(
      SourceType.API,
      SourceType.APP_STORE,
      SourceType.CSV,
      SourceType.PENDO,
      SourceType.ZAPIER,
      SourceType.SLACK,
      SourceType.ZENDESK,
    ),
    field: 'owner_id'
  })
  sourceType?: SourceType;

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
