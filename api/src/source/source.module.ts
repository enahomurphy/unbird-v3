import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Dataset } from './models/datasets'
import { DatasetRepo } from './repo/datasets.repo';
import { DatasetMutationResolver } from './resolvers/dataset.mutation';
import { DatasetQueryResolver } from './resolvers/dataset.query';

@Module({
  imports: [
    SequelizeModule.forFeature([Dataset]),
  ],
  providers: [DatasetMutationResolver, DatasetQueryResolver, DatasetRepo],
  exports: [DatasetRepo],
})

export class SourceModule {}
