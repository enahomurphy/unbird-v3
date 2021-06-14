import { typeCheck } from 'type-check';
import { DataTypes } from 'src/core/types/enums/datatypes.enum';
import { isPOJO, isJSON } from './validator';

export const toJson = (data: any): string => {
  try {
    return JSON.stringify(data);
  } catch (error) {
    return '';
  }
};

export const getType = (data: unknown): DataTypes => {
  if (typeCheck('Number', data)) {
    return DataTypes.NUMBER;
  }

  if (typeCheck('Date', data)) {
    return DataTypes.DATE;
  }

  if (typeCheck('Boolean', data)) {
    return DataTypes.BOOLEAN;
  }

  if (data === null) {
    return DataTypes.NULL;
  }

  if (data === undefined) {
    return DataTypes.NULL;
  }

  if (Array.isArray(data)) {
    return DataTypes.ARRAY;
  }

  if (isJSON(data as string)) {
    return DataTypes.JSON;
  }

  if (isPOJO(data)) {
    return DataTypes.OBJECT;
  }

  return DataTypes.STRING;
};
