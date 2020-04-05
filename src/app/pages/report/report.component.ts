import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReportService} from "../../services/report/report.service";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.less']
})
export class ReportComponent implements OnInit {
  formData = this.fb.group({
    checkMethod: ['', Validators.required],
    patientName: ['', Validators.required],
    age: [0, [Validators.required, Validators.pattern(/^(?:[1-9][0-9]?|1[01][0-9]|120)$/)]],
    gender: ['男'],
    checkData: ['', Validators.required],
    checkFinding: ['', Validators.required],
    conclusion: ['', Validators.required],
  });
  name;
  constructor(private route: ActivatedRoute,
              private reportService: ReportService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
  }

  onSubmit() {
    this.reportService.postReport({
        name: this.name,
        checkMethod: this.formData.controls.checkMethod.value,
        patientName: this.formData.controls.patientName.value,
        age: this.formData.controls.age.value,
        gender: this.formData.controls.gender.value,
        checkData: this.formData.controls.checkData.value,
        checkFinding: this.formData.controls.checkFinding.value,
        conclusion: this.formData.controls.conclusion.value,
      }
    ).subscribe(
      res => {
        console.log(res);
      }
    );
  }
}
