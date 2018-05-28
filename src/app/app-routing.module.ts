import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { KingdomChartComponent } from './kingdom-chart/kingdom-chart.component';
import { EntireAgeComponent } from './entire-age/entire-age.component';

const routes: Routes = [
  { path: 'kingdom-chart', component: KingdomChartComponent },
  { path: 'entire-age', component: EntireAgeComponent },
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
