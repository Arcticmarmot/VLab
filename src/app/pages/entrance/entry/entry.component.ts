import {Component, Input, OnInit} from '@angular/core';
import {UserPermission} from '../../../constants/type';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.less']
})
export class EntryComponent implements OnInit {
  @Input() caseNum;
  @Input() permission: UserPermission;
  constructor() { }

  ngOnInit(): void {
  }

}
