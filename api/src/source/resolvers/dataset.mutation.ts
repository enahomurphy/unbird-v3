import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { Dataset } from '../model/datasets';
import { DatasetRepo } from '../repo/datasets.repo';



@Resolver(() => Dataset)
export class DatasetMutationResolver {
  constructor(
    private datasetRepo: DatasetRepo,
  ) {}

  private readonly logger = new Logger(DatasetMutationResolver.name);

  @Mutation(() => Dataset)
  async getDataset(@Args('id') id: number) {
    this.logger.log('logger');
    return this.datasetRepo.get(id);
  }
}
