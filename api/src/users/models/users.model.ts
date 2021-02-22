import { Column, DataType, Model, Table, HasOne } from 'sequelize-typescript';
import { Field, ObjectType } from '@nestjs/graphql';
import { hashPassword } from 'src/core/utils/password';

@ObjectType()
@Table({ modelName: 'users', timestamps: true, updatedAt: true })
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

  @Field(() => String)
  @Column({
    type: DataType.STRING,
    field: 'phone',
  })
  phone?: string;

  @Column({
    type: DataType.STRING,
    field: 'password',
    set(this, val) {
      this.setDataValue('password', hashPassword(val as string));
    },
  })
  password?: string;

  @Column({
    type: DataType.BOOLEAN,
    field: 'phone_verified',
  })
  phoneVerified?: boolean;

  @Field(() => String, { nullable: true })
  @Column({
    type: DataType.STRING,
    field: 'address',
  })
  address?: string;

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

  @Field(() => String, { nullable: true })
  @Column(DataType.VIRTUAL)
  public get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
