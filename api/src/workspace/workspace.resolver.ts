import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { WorkspaceService } from './workspace.service';
import { Workspace } from './models/workspace.model';
import {
  CreateWorkspaceInput,
  CreateWorkspaceRes,
  DomainSearchInput,
  DomainSearchRes,
} from './dto/workspace.dtos';

@Resolver(() => Workspace)
export class WorkspaceResolver {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Mutation(() => CreateWorkspaceRes)
  createWorkspace(
    @Args('createWorkspaceInput') createWorkspaceInput: CreateWorkspaceInput,
  ): Promise<CreateWorkspaceRes> {
    return this.workspaceService.create(createWorkspaceInput);
  }

  @Query(() => [Workspace], { name: 'workspace' })
  findAll() {
    return this.workspaceService.findAll();
  }

  @Query(() => Workspace, { name: 'workspace' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.workspaceService.findOne(id);
  }

  @Query(() => DomainSearchRes, { name: 'domainSearch' })
  async findDomain(
    @Args('payload') payload: DomainSearchInput,
  ): Promise<DomainSearchRes> {
    return this.workspaceService.findDomain(payload);
  }

  @Mutation(() => Workspace)
  removeWorkspace(@Args('id', { type: () => Int }) id: number) {
    return this.workspaceService.remove(id);
  }
}
