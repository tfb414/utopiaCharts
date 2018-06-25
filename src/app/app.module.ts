import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { KingdomApiService } from './services/kingdom-api/kingdom-api.service';
import { EntireAgeChartComponent } from './entire-age-chart/entire-age-chart.component';

@NgModule({
  declarations: [
    AppComponent,
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
