import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import { TableComponent } from './table/table.component';
import {MatTableModule} from '@angular/material/table';
import { IntroduceComponent } from './sub-pages/introduce/introduce.component';
import { ProjectDescribeComponent } from './sub-pages/project-describe/project-describe.component';
import { NetworkRequestComponent } from './sub-pages/network-request/network-request.component';
import { TechFrameworkComponent } from './sub-pages/tech-framework/tech-framework.component';
import { ProjectFeatureComponent } from './sub-pages/project-feature/project-feature.component';
import { ServicePlanComponent } from './sub-pages/service-plan/service-plan.component';


@NgModule({
  declarations: [HomeComponent, TableComponent, IntroduceComponent, ProjectDescribeComponent, NetworkRequestComponent, TechFrameworkComponent, ProjectFeatureComponent, ServicePlanComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatTabsModule,
    MatTableModule,
  ]
})
export class HomeModule { }
