import { Injectable } from '@nestjs/common';
import { Team } from './team.entity';

@Injectable()
export class TeamsService {
  async findAll(): Promise<Team[]> {
    const team = new Team();
    team.id = 1;
    team.name = 'COC1';
    team.point = 3;
    team.fairplay = 55;

    return [team];
  }
}
