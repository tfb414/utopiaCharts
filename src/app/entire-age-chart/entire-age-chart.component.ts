import { Component, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { WeatherService } from "../service/weather.service";
import { Chart } from "chart.js";
import { KingdomApiService } from "../services/kingdom-api.service";

@Component({
  selector: "app-entire-age-chart",
  templateUrl: "./entire-age-chart.component.html",
  styleUrls: ["./entire-age-chart.component.css"]
})
export class EntireAgeChartComponent implements AfterViewInit {
  chart: any = [];

  constructor(
    private _kingdomAPI: KingdomApiService,
    private elementRef: ElementRef,
  ) {}

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      let ctx = this.elementRef.nativeElement.querySelector(`#canvas`);
      this.createChart(ctx);
    })
  }
  createChart(ctx) {
    this._kingdomAPI.getData().subscribe((data) => {
      let weatherDates = data.weatherDates;
      let temp_max = data.temp_max;
      let temp_min = data.temp_min;

      this.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: weatherDates,
          datasets: [
            {
              data: temp_max,
              borderColor: "#3cba9f",
              fill: false
            },
            {
              data: temp_min,
              borderColor: "#ffcc00",
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              {
                display: true
              }
            ]
          }
        }
      });
    });
  }
}
