import { registerEnumType } from '@nestjs/graphql';

export enum DataTypes {
  NUMBER = 'number',
  STRING = 'string',
  DATE = 'date',
  OBJECT = 'object',
  BOOLEAN = 'boolean',
  NULL = 'null',
  ARRAY = 'array',
  JSON = 'json',
}

registerEnumType(DataTypes, {
  name: 'DataTypes',
  description: 'Feed data types',
});
