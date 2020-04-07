import { Component, OnInit } from '@angular/core';
import {CorrectService} from "../../services/correct/correct.service";
import {ActivatedRoute} from "@angular/router";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-correct',
  templateUrl: './correct.component.html',
  styleUrls: ['./correct.component.less']
})
export class CorrectComponent implements OnInit {
  data;
  name;
  constructor(private correctService: CorrectService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this.update();
  }
  update() {
    this.correctService.getReportToCorrect(this.name).subscribe(
      res => {
        this.data = res;
        this.data.forEach(e => {
          if (!e.score) {
            e.scoreControl = new FormControl('');
          }
        });
      }
    );
  }
  correct(stu, s) {
    this.correctService.postCorrect({
      student: stu,
      name: this.name,
      score: s
    }).subscribe(
      res => {
        this.update();
      }
    );
  }
}
