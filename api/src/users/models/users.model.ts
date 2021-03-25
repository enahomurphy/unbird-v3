import { Column, DataType, Model, Table, HasOne } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';
import { hashPassword } from 'src/core/utils/password';

@ObjectType()
@Table({ modelName: 'users', timestamps: false, updatedAt: false })
export class User extends Model {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.STRING,
    field: 'first_name',
  })
  firstName?: string;

  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.STRING,
    field: 'last_name',
  })
  lastName?: string;

  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.STRING,
    field: 'email',
  })
  email?: string;

  @Field(() => Boolean, { nullable: true })
  @Column({
    type: DataType.BOOLEAN,
    field: 'is_verified',
  })
  isVerified?: Boolean;

  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.STRING,
    field: 'job_title',
  })
  jobTitle?: string

  @Column({
    type: DataType.STRING,
    field: 'password',
    set(this, val) {
      this.setDataValue('password', hashPassword(val as string));
    },
  })
  password?: string;

  @Field(() => Date, { nullable: true })
  @Column({
    type: DataType.DATE,
    field: 'last_active',
  })
  lastActive?: string;


  @Field(() => String, { nullable: true })
  @Column(DataType.VIRTUAL)
  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
