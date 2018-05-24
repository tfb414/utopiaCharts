import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { KingdomChartComponent } from './kingdom-chart/kingdom-chart.component';

const routes: Routes = [
  { path: 'kingdom-chart', component: KingdomChartComponent }
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
