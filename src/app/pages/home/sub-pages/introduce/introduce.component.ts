import {Component, Input, OnInit} from '@angular/core';
import {LEADER_DATA, MAIN_TEAM_DATA, OTHER_TEAM_DATA} from '../../../../constants/info';

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.less']
})
export class IntroduceComponent implements OnInit {
  leaderData = LEADER_DATA;
  mainTeamData = MAIN_TEAM_DATA;
  otherTeamData = OTHER_TEAM_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
