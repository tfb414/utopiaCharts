import { Injectable } from '@angular/core';
import { Chart } from "chart.js";

@Injectable()
export class CreateChartService {

  constructor() { }

  createChart(data, ctx, chartName) {
    const dates = Object.keys(data);


    // Networth Total
    let ourKdDataRaw = dates.map((day)=> {
      return data[day].ourKd.totals[chartName];
    })

    let enemyKdDataRaw = dates.map((day)=> {
      return data[day].enemyKd.totals[chartName];
    })

    const ourKdData = {
      data: ourKdDataRaw,
      borderColor: "green",
      fill: false
    }

    const enemyKdData = {
      data: enemyKdDataRaw,
      borderColor: "red",
      fill: false
    }

    let chartData = this.createChartData(dates, [ourKdData, enemyKdData])

    return new Chart(ctx, chartData);
  
  }

  createChartData = (dates, datasets) => {
    let chartData = {
      type: "line",
      data: {
        labels: dates,
        datasets: []
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
    }

    let newChartData = {...chartData}
    newChartData.data.datasets = datasets;
    return newChartData;

  }

}
