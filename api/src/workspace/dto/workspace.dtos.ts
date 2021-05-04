import { InputType, Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateWorkspaceRes {
  @Field({ nullable: false })
  id?: number;

  @Field({ nullable: false })
  ownerId?: number;

  @Field({ nullable: false })
  name?: string;

  @Field({ nullable: false })
  domain?: string;

  @Field({ nullable: false })
  createdAt?: string;

  @Field({ nullable: false })
  updatedAt?: string;
}

@InputType()
export class CreateWorkspaceInput {
  @Field(() => Int, { nullable: false })
  ownerId: number;

  @Field({ nullable: false })
  name: string;

  @Field({ nullable: false })
  domain: string;
}

@ObjectType()
export class DomainSearchRes {
  @Field({ nullable: false })
  exists: boolean;
}

@InputType()
export class DomainSearchInput {
  @Field({ nullable: false })
  domain: string;
}
