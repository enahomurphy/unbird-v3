import { Mutation, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { Dataset } from '../models/datasets';
import { DatasetRepo } from '../repo/datasets.repo';

@Resolver(() => Dataset)
export class DatasetMutationResolver {
  constructor(private datasetRepo: DatasetRepo) {}

  private readonly logger = new Logger(DatasetMutationResolver.name);

  @Mutation(() => Dataset)
  async createDataset() {
    this.logger.log('create Dataset');
  }
}
