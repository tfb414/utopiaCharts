import { Component, OnInit, ElementRef, AfterViewInit } from "@angular/core";
import { Chart } from "chart.js";
import { KingdomApiService } from "../services/kingdom-api.service";

@Component({
  selector: "app-entire-age",
  templateUrl: "./entire-age.component.html",
  styleUrls: ["./entire-age.component.css"]
})
export class EntireAgeComponent implements AfterViewInit {
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

      let ageData = data['age'];
      let landAverage = ageData['landAverage'];
      let landTotal = ageData['landTotal'];
      let networthAverage = ageData['networthAverage'];
      let networthTotal = ageData['networthTotal'];
      let honorTotal = ageData['honorTotal'];
      let currentDate = ageData['currentDate'];

      // let weatherDates = data.weatherDates;
      // let temp_max = data.temp_max;
      // let temp_min = data.temp_min;

      this.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: currentDate,
          datasets: [
            {
              data: landAverage,
              borderColor: "#3cba9f",
              fill: false
            }
            // {
            //   data: landTotal,
            //   borderColor: "#ffcc00",
            //   fill: false
            // }
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
