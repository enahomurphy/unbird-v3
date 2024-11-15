import { registerEnumType } from '@nestjs/graphql';

export enum SourceType {
  APP_STORE = 'app_store',
  PLAY_STORE = 'play_store',
  SLACK = 'slack',
  CSV = 'csv',
  API = 'api',
  ZAPIER = 'zapier',
  PENDO = 'pendo',
  ZENDESK = 'zendesk',
}

registerEnumType(SourceType, {
  name: 'SourceType',
  description: 'Type of source',
});
