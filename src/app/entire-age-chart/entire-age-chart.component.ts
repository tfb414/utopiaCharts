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
  networthTotalChart: any = [];
  networthAverageChart: any = [];
  landTotalChart: any = [];
  landAverageChart: any = [];
  honorTotalChart: any = [];

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
      let ctx = this.elementRef.nativeElement.querySelector(`#networthAverageChartCanvas`);
      let ctx2 = this.elementRef.nativeElement.querySelector(`#networthTotalsChartCanvas`);
      this.createChart(ctx);
      this.createChart(ctx2);
    })
  }

  createChart(ctx) {
    this._kingdomAPI.getData().subscribe((data) => {

      const dates = Object.keys(data);


      //Networth Total
      let ourKDnetworthTotal = dates.map((day)=> {
        return data[day].ourKd.totals.networthTotal;
      })

      let enemyKdNetworthTotal = dates.map((day)=> {
        return data[day].enemyKd.totals.networthTotal;
      })

      const ourKDnetworthTotalData = {
        data: ourKDnetworthTotal,
        borderColor: "green",
        fill: false
      }

      const enemyKdNetworthTotalData = {
        data: enemyKdNetworthTotal,
        borderColor: "red",
        fill: false
      }

      
      //networthAverage
      let ourKDnetworthAverage = dates.map((day)=> {
        return data[day].ourKd.totals.networthAverage;
      })

      let enemyKdNetworthAverage = dates.map((day)=> {
        return data[day].enemyKd.totals.networthAverage;
      })

      const ourKDnetworthAverageData = {
        data: ourKDnetworthTotal,
        borderColor: "green",
        fill: false
      }

      const enemyKdNetworthAverageData = {
        data: enemyKdNetworthTotal,
        borderColor: "red",
        fill: false
      }
      
      let networthTotal = this.createChartData(dates, [ourKDnetworthTotalData, enemyKdNetworthTotalData])
      // let networthAverage = this.createChartData(dates, [ourKDnetworthAverageData, enemyKdNetworthAverageData])

      this.networthTotalChart = new Chart(ctx, networthTotal);
      // this.networthAverageChart = new Chart(ctx, networthAverage);
      
      
      
    });
  }

  

}
