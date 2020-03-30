import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from "./home/home.module";
import {LoginModule} from './login/login.module';
import {EntranceModule} from "./entrance/entrance.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HomeModule,
    LoginModule,
    EntranceModule
  ]
})
export class PagesModule { }
