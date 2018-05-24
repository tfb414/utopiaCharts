import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WeatherService } from './service/weather.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { KingdomChartComponent } from './kingdom-chart/kingdom-chart.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    KingdomChartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
