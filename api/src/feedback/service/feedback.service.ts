import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { get } from 'lodash';

import { toJson, getType } from 'src/core/utils/functions';
import { Feedback } from '../models/feedback';
import { FeedbackMappings, FeedbackMapping } from '../types';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectModel(Feedback)
    private feedback: typeof Feedback,
  ) {}

  prepare(
    data: Record<string, any>[],
    mappings: FeedbackMappings,
    ignore: string[] = [],
  ): Record<string, any>[] {
    const defaults = [
      'title',
      'text',
      'sentiment',
      'date',
      'status',
      'external_id',
    ];

    const flattenedMappings = new Map<string, FeedbackMapping>();
    const flattenedIgnore = new Set(ignore);
    const defaultData = [];

    mappings.forEach((mapping) => {
      flattenedMappings.set(mapping.mapKeyTo, mapping);
    });
    console.log(flattenedMappings.keys());

    data.forEach((feedback: Record<string, any>) => {
      const field = {
        properties: {
          fields: [],
          raw: toJson(feedback),
        },
      };

      defaults.forEach((key) => {
        if (flattenedMappings.has(key)) {
          console.log(key, flattenedMappings.get(key));

          if (key === defaults[5]) {
            field['externalId'] = feedback[flattenedMappings.get(key).keyPath];
          } else {
            field[key] = feedback[flattenedMappings.get(key).keyPath];
          }

          flattenedIgnore.add(flattenedMappings.get(key).keyPath);
        }
      });

      flattenedMappings.forEach((mapping) => {
        if (flattenedIgnore.has(mapping.keyPath)) {
          return;
        }

        const mappedData = get(feedback, mapping.keyPath, null);

        if (mappedData === null) return;

        field.properties.fields.push({
          valuePath: mapping.keyPath,
          key: mapping.mapKeyTo,
          value: mappedData,
          dataType: getType(mappedData),
        });
        flattenedIgnore.add(mapping.keyPath);
      });

      Object.keys(feedback).forEach((key) => {
        if (flattenedIgnore.has(key)) {
          return;
        }

        if (flattenedMappings.has(key)) {
          const { keyPath, mapKeyTo } = flattenedMappings.get(key);
          field.properties.fields.push({
            key: mapKeyTo,
            valuePath: flattenedMappings.get(key).keyPath,
            value: get(feedback, keyPath),
            dataType: getType(get(feedback, keyPath)),
          });

          return;
        }

        field.properties.fields.push({
          key: key,
          valuePath: key,
          value: feedback[key],
          dataType: getType(feedback[key]),
        });
      });

      defaultData.push(field);
    });

    return defaultData;
  }
}
