import { Component, OnInit } from '@angular/core';
import {MainInfoService} from "../../services/info/main-info.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.less']
})
export class MainInfoComponent implements OnInit {
  data;
  constructor(private mainInfoService: MainInfoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    console.log(name);
    this.mainInfoService.getMainInfo(name).subscribe(
      res => {
        this.data = res;
      }
    );
  }

}
