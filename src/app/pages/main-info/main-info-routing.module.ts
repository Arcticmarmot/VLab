import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainInfoComponent} from './main-info.component';


const routes: Routes = [
  {path: 'main_info/:name', component: MainInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainInfoRoutingModule { }
