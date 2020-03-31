import { Component, OnInit } from '@angular/core';
import {UserInfo} from '../../constants/type';
import {ReportStateService} from '../../services/report/report-state.service';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.less']
})
export class EntranceComponent implements OnInit {
  userInfo: UserInfo;
  constructor(private reportStateService: ReportStateService) { }

  ngOnInit(): void {
    this.reportStateService.getReportState().subscribe(
      res => {
        this.userInfo = res;
      }
    );
  }

}
