import {Component, Input, OnInit} from '@angular/core';
import {ReportState} from "../../../constants/type";

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.less']
})
export class EntryComponent implements OnInit {
  @Input() report: ReportState;
  @Input() role;
  constructor() { }

  ngOnInit(): void {
  }

}
