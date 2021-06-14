import { DataTypes } from 'src/core/types/enums/datatypes.enum';

export interface FeedbackMapping {
  keyPath: string;
  mapKeyTo: string;
  dataType: DataTypes;
}

export type FeedbackMappings = FeedbackMapping[];
