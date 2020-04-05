import { Component, OnInit } from '@angular/core';
import {MainInfoService} from '../../services/info/main-info.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-key-info',
  templateUrl: './key-info.component.html',
  styleUrls: ['./key-info.component.less']
})
export class KeyInfoComponent implements OnInit {
  data;
  constructor(private mainInfoService: MainInfoService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    console.log(name);
    this.mainInfoService.getKey(name).subscribe(
      res => {
        this.data = res;
      }
    );
  }
}
