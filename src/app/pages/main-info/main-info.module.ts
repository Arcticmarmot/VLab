import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainInfoRoutingModule } from './main-info-routing.module';
import { MainInfoComponent } from './main-info.component';


@NgModule({
  declarations: [MainInfoComponent],
  imports: [
    CommonModule,
    MainInfoRoutingModule
  ]
})
export class MainInfoModule { }
