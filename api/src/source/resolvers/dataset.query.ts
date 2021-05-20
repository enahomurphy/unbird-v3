import { Args, Resolver, Query } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { Dataset } from '../models/datasets';
import { DatasetRepo } from '../repo/datasets.repo';



@Resolver(() => Dataset)
export class DatasetQueryResolver {
  constructor(
    private datasetRepo: DatasetRepo,
  ) {}

  private readonly logger = new Logger(DatasetQueryResolver.name);

  @Query(() => Dataset)
  async getDataset(@Args('id') id: number) {
    this.logger.log('logger');
    return this.datasetRepo.get(id);
  }
}
