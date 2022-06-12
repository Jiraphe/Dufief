import { Resolver, Query } from '@nestjs/graphql';
import { Team } from './team.entity';
import { TeamsService } from './teams.service';

@Resolver((of) => Team)
export class TeamsResolver {
  constructor(private teamsService: TeamsService) {}

  @Query((returns) => [Team])
  teams(): Promise<Team[]> {
    return this.teamsService.findAll();
  }
}
