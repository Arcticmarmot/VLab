import {Component, Input, OnInit} from '@angular/core';
import {ReportState} from '../../../constants/type';
import {MainInfoService} from "../../../services/info/main-info.service";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.less']
})
export class EntryComponent implements OnInit {
  @Input() report: ReportState;
  @Input() role;
  constructor(private mainInfoService: MainInfoService) { }

  ngOnInit(): void {
  }

  jump() {
    this.mainInfoService.getUrl(this.report.name).subscribe(
      res => {
        console.log(res);
        window.open(res.data);
      }
    );
  }
}
