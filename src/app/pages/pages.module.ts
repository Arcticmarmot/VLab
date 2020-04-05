import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeModule} from "./home/home.module";
import {LoginModule} from './login/login.module';
import {EntranceModule} from "./entrance/entrance.module";
import {MainInfoModule} from "./main-info/main-info.module";
import {KeyInfoModule} from './key-info/key-info.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HomeModule,
    LoginModule,
    EntranceModule,
    MainInfoModule,
    KeyInfoModule
  ]
})
export class PagesModule { }
