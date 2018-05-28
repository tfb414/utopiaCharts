import { Component, OnInit, ElementRef } from '@angular/core';
import { Chart } from 'chart.js'
import { KingdomApiService } from '../services/kingdom-api.service';

@Component({
  selector: 'app-kingdom-chart',
  templateUrl: './kingdom-chart.component.html',
  styleUrls: ['./kingdom-chart.component.css']
})
export class KingdomChartComponent implements OnInit {

  chart: any = [];
  
  constructor(
    private _kingdomAPI: KingdomApiService,
    private elementRef: ElementRef,
  ) {}

  ngOnInit() {
    this._kingdomAPI.getData().subscribe((data) => {

        console.log('weather data', data);

        // let temp_max = res['list'].map(res => res.main.temp_max)
        // let temp_min = res['list'].map(res => res.main.temp_min)
        // let alldates = res['list'].map(res => res.dt)

        // let weatherDates = []
        // alldates.forEach((res) => {
        //   let jsdate = new Date(res * 1000)
        //   weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric'}))
        // })

      //   this.chart = new Chart('canvas', {
      //     type: 'line',
      //     data: {
      //       labels: weatherDates,
      //       datasets: [
      //         {
      //           data: temp_max,
      //           borderColor: '#3cba9f',
      //           fill: false
      //         },
      //         {
      //           data: temp_min,
      //           borderColor: '#ffcc00',
      //           fill: false
      //         },
      //       ]
      //     },
      //     options: {
      //       legend: {
      //         display: false
      //       },
      //       scales: {
      //         xAxes: [{
      //           display: true
      //         }],
      //         yAxes: [{
      //           display: true
      //         }]
      //       }
      //     }
      //   })

      })
  }

}
