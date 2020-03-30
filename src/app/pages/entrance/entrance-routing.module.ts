import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EntranceComponent} from './entrance.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {path: 'entrance', component: EntranceComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntranceRoutingModule { }
