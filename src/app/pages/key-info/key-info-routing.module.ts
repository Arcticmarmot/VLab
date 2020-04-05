import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KeyInfoComponent} from './key-info.component';


const routes: Routes = [
  {path: 'key/:name', component: KeyInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyInfoRoutingModule { }
