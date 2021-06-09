import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@ObjectType()
@Table({ modelName: 'workspaces', timestamps: true, updatedAt: true })
export class Workspace extends Model {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => Int, { nullable: true })
  @Column({
    type: DataType.INTEGER,
    field: 'owner_id',
  })
  ownerId?: number;

  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.STRING,
    field: 'name',
  })
  name?: string;

  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.STRING,
    field: 'domain',
  })
  domain?: string;

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
