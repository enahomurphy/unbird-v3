import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { Workspace } from './models/workspace.model';
import { WorkspaceService } from './workspace.service';
import { WorkspaceResolver } from './workspace.resolver';

@Module({
  imports: [SequelizeModule.forFeature([Workspace])],
  providers: [WorkspaceResolver, WorkspaceService],
  exports: [WorkspaceService],
})
export class WorkspaceModule {}
