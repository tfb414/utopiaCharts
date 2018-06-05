import { Component, OnInit, ElementRef, AfterViewInit, Input } from "@angular/core";
import { Chart } from "chart.js";
import { KingdomApiService } from "../services/kingdom-api.service";

@Component({
  selector: 'app-entire-age-chart',
  templateUrl: './entire-age-chart.component.html',
  styleUrls: ['./entire-age-chart.component.css']
})
export class EntireAgeChartComponent implements AfterViewInit {
  @Input('data') data: string;  
  chart: any = [];

  landTotal: false;
  landAverage: true;
  networthAverage: false;
  networthTotal: false;
  honorTotal: false;

  constructor(
    private _kingdomAPI: KingdomApiService,
    private elementRef: ElementRef,
  ) {}

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

      const dates = Object.keys(data);

     
      
      
      let kingdomTotals = dates.map((day)=> {
        return data[day].ourKd.totals.networthTotal;
        // console.log(kingdomTotals.ourKdData["landTotal"]);
      })

      let enemyKdTotals = dates.map((day)=> {
        return data[day].enemyKd.totals.networthTotal;
        // console.log(kingdomTotals.ourKdData["landTotal"]);
      })

      

      const kdTotalDataset = {
        data: kingdomTotals,
        borderColor: "green",
        fill: false
      }

      const enemyKdTotalsDataset = {
        data: enemyKdTotals,
        borderColor: "red",
        fill: false
      }
      
      let derp = this.createChartData(dates, [kdTotalDataset, enemyKdTotalsDataset])
      
      // newChartData.data.datasets[1] = enemyKdTotals;

      this.chart = new Chart(ctx, derp);
    });
  }

  

}
