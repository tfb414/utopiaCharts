import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KingdomChartComponent } from './kingdom-chart/kingdom-chart.component';
import { AppRoutingModule } from './app-routing.module';
import { EntireAgeChartComponent } from './entire-age-chart/entire-age-chart.component';
import { KingdomApiService } from './services/kingdom-api.service';

@NgModule({
  declarations: [
    AppComponent,
    KingdomChartComponent,
    EntireAgeChartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [KingdomApiService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
