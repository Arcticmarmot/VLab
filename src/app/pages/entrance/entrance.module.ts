import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntranceRoutingModule } from './entrance-routing.module';
import { EntranceComponent } from './entrance.component';
import { EntryComponent } from './entry/entry.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";


@NgModule({
  declarations: [EntranceComponent, EntryComponent],
  imports: [
    CommonModule,
    EntranceRoutingModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class EntranceModule { }
