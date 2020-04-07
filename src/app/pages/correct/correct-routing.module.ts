import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CorrectComponent} from './correct.component';


const routes: Routes = [
  {path: 'correct/:name', component: CorrectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrectRoutingModule { }
