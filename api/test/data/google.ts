import * as faker from 'faker';

export interface Criteria {
  criteria: string;
  rating: number;
}

export interface Review {
  id: string;
  userName: string;
  userImage: string;
  date: Date;
  score: number;
  scoreText: string;
  url: string;
  title: string;
  text: string;
  replyDate?: Date;
  replyText: string;
  version: string;
  thumbsUp: number;
  criterias: Criteria[];
}

export type UnstructuredData = Record<string, any>[];

export interface GoogleReview {
  data: Review[];
  nextPaginationToken: string;
}

const createReview = (): Review => {
  return {
    id: faker.datatype.string(20),
    userName: faker.helpers.userCard().username,
    userImage: faker.image.imageUrl(),
    date: faker.datatype.datetime(20),
    score: faker.datatype.number(5),
    scoreText: faker.datatype.string(20),
    url: faker.internet.url(),
    title: faker.name.title(),
    text: faker.helpers.userCard().username,
    replyDate: faker.datatype.datetime(),
    replyText: faker.random.words(faker.datatype.number(10)),
    version: faker.datatype.string(20),
    thumbsUp: faker.datatype.number(30),
    criterias: [
      {
        criteria: faker.datatype.string(3),
        rating: faker.datatype.number(3),
      },
    ],
  };
};

export const reviews = (): GoogleReview => {
  return {
    data: Array(faker.datatype.number(50)).fill(1).map(createReview),
    nextPaginationToken: faker.datatype.string(20),
  };
};

// Generated by https://quicktype.io

export interface TopLevel {
  key: string;
  value: string;
  parsedValue: string | number | Date | boolean | null | 'json';
  dataType: string;
  fieldType: string;
  id: string;
}

export enum Types {
  NUMBER = 'number',
  STRING = 'string',
  DATE = 'date',
  OBJECT = 'object',
  BOOLEAN = 'boolean',
  NULL = 'null',
  ARRAY = 'array',
  JSON = 'json',
}

export interface DataMapping {
  keyPath: string;
  mapKeyTo: string;
  dataType: Types;
}

export type Mappings = DataMapping[];
