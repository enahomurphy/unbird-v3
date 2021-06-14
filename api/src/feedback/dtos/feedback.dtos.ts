import { ObjectType, Field } from '@nestjs/graphql';
import { DataTypes } from 'src/core/types/enums/datatypes.enum';

@ObjectType()
export class FeedbackProperty {
  @Field(() => String)
  keyPath: string;

  @Field(() => String)
  mapKeyTo: string;

  @Field(() => DataTypes)
  dataType: DataTypes;
}

@ObjectType()
export class FeedbackProperties {
  @Field(() => FeedbackProperty, { defaultValue: [] })
  fields: FeedbackProperty[];

  raw: string;
}
