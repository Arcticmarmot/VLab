import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorrectRoutingModule } from './correct-routing.module';
import { CorrectComponent } from './correct.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [CorrectComponent],
  imports: [
    CommonModule,
    CorrectRoutingModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class CorrectModule { }
