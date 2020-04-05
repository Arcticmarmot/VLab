import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KeyInfoRoutingModule } from './key-info-routing.module';
import { KeyInfoComponent } from './key-info.component';


@NgModule({
  declarations: [KeyInfoComponent],
  imports: [
    CommonModule,
    KeyInfoRoutingModule
  ]
})
export class KeyInfoModule { }
