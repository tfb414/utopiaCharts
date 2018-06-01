import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KingdomChartComponent } from './kingdom-chart/kingdom-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { EntireAgeComponent } from './entire-age/entire-age.component';
import { KingdomApiService } from './services/kingdom-api.service';
import { EntireAgeChartComponent } from './entire-age-chart/entire-age-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    KingdomChartComponent,
    EntireAgeComponent,
    EntireAgeChartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [KingdomApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
