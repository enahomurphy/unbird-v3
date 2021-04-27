import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { InjectModel } from '@nestjs/sequelize';

import { CreateWorkspaceInput, CreateWorkspaceRes, DomainSearchInput, DomainSearchRes } from './dto/workspace.dtos';
import { Workspace } from './models/workspace.model';

@Injectable()
export class WorkspaceService {
  constructor(
    @InjectModel(Workspace) private workspaceRepo: typeof Workspace,
    private readonly redisService: RedisService,
    ) {}

  create(createWorkspaceInput: CreateWorkspaceInput): Promise<CreateWorkspaceRes> {
    console.log('see here')
    const instance = new this.workspaceRepo(createWorkspaceInput);
    const workspace = instance.save();
    return workspace;
  }

  findAll() {
    return `This action returns all workspace`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workspace`;
  }

  remove(id: number) {
    return `This action removes a #${id} workspace`;
  }

  async findDomain(domainSearchInput: DomainSearchInput): Promise<DomainSearchRes> {
    const instance = new this.workspaceRepo(domainSearchInput);
    const workspace = await this.workspaceRepo.findOne({
      where: {
        domain: instance.domain
      }
    });
    return { exists: !!workspace }
  }
}
