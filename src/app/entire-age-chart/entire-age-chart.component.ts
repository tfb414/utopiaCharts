import { Component, OnInit, ElementRef, AfterViewInit, Input } from "@angular/core";
import { KingdomApiService } from "../services/kingdom-api/kingdom-api.service";
import { CreateChartService } from "../services/create-chart/create-chart.service";

@Component({
  selector: 'app-entire-age-chart',
  templateUrl: './entire-age-chart.component.html',
  styleUrls: ['./entire-age-chart.component.css']
})
export class EntireAgeChartComponent implements AfterViewInit {
  @Input('data') data: string;  
  networthTotalChart: any = [];
  // landTotalChart: any = [];
  // honorTotalChart: any = [];
  // networthDifferenceChart: any = [];
  // networthPercentageChart: any = [];

  landTotal: boolean = false;
  landAverage: boolean = true;
  networthAverage: boolean = false;
  networthTotal: boolean = false;
  honorTotal: boolean = false;

  constructor(
    private _kingdomAPI: KingdomApiService,
    private _createChart: CreateChartService,
    private elementRef: ElementRef,
  ) {}

  

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.getDataAndCreateCharts();
      // let networthTotalContext = this.elementRef.nativeElement.querySelector(`#networthTotalsChartCanvas`);
      // let landTotalContext = this.elementRef.nativeElement.querySelector(`#landAcreTotalChartCanvas`);
      // let honorTotalContext = this.elementRef.nativeElement.querySelector(`#honorTotalsChartCanvas`);
      
      // this.networthTotalChart = this.createChart(networthTotalContext, "networthTotal");
      // this.landTotalChart = this.createChart(landTotalContext, "landTotal");
      // this.honorTotalChart = this.createChart(honorTotalContext, "honorTotal");

      // let networthDifferenceContext = this.elementRef.nativeElement.querySelector(`#networthDifferenceChartContext`);
      // this.networthDifferenceChart = this.createNetworthDifferenceChart(networthDifferenceContext);

      // let networthPercentContext = this.elementRef.nativeElement.querySelector(`#networthPercentChartCanvas`);
      // this.networthPercentageChart = this.createNetworthPercentageChart(networthPercentContext);

  }

  // createNetworthDifferenceChart(ctx) {
  //   this._kingdomAPI.getData().subscribe((data) => {

  //     const dates = Object.keys(data);

  //     let ourKdDataRaw = dates.map((day)=> {
  //       return data[day].ourKd.totals.networthTotal;
  //     })

  //     let enemyKdDataRaw = dates.map((day)=> {
  //       return data[day].enemyKd.totals.networthTotal;
  //     })

  //     let dataForFnOverTimeSubtract = ourKdDataRaw.map((point, i)=> {
  //       return point - enemyKdDataRaw[i];
  //     })

  //     console.log('dataforfnovertime',dataForFnOverTimeSubtract);
  //     console.log('ourKdDataRaw', ourKdDataRaw);

  //     const fnOverTimeDataset = {
  //       data: dataForFnOverTimeSubtract,
  //       borderColor: "blue",
  //       fill: false
  //     }

  //     return new Chart(ctx, {
  //     type: "line",
  //     data: {
  //       labels: dates,
  //       datasets: [fnOverTimeDataset],
  //     },
  //     options: {
  //       legend: {
  //         display: false
  //       },
  //       scales: {
  //         xAxes: [
  //           {
  //             display: true
  //           }
  //         ],
  //         yAxes: [
  //           {
  //             display: true
  //           }
  //         ]
  //       }
  //     }
  //   });
  //   })
  // }

  // createNetworthPercentageChart(ctx) {
  //   this._kingdomAPI.getData().subscribe((data) => {

  //     const dates = Object.keys(data);

  //     let ourKdDataRaw = dates.map((day)=> {
  //       return data[day].ourKd.totals.networthTotal;
  //     })

  //     let enemyKdDataRaw = dates.map((day)=> {
  //       return data[day].enemyKd.totals.networthTotal;
  //     })

  //     let dataForFnOverTimePercentage = ourKdDataRaw.map((point, i)=> {
  //       return point / enemyKdDataRaw[i];
  //     })

  //     const fnOverTimeDataset = {
  //       data: dataForFnOverTimePercentage,
  //       borderColor: "blue",
  //       fill: false
  //     }

  //     return new Chart(ctx, {
  //     type: "line",
  //     data: {
  //       labels: dates,
  //       datasets: [fnOverTimeDataset],
  //     },
  //     options: {
  //       legend: {
  //         display: false
  //       },
  //       scales: {
  //         xAxes: [
  //           {
  //             display: true
  //           }
  //         ],
  //         yAxes: [
  //           {
  //             display: true
  //           }
  //         ]
  //       }
  //     }
  //   });

  //   })
  // }

  getDataAndCreateCharts() {
    let networthTotalContext = this.elementRef.nativeElement.querySelector(`#networthTotalsChartCanvas`);

    this._kingdomAPI.getData().subscribe((data) => {
      this.networthTotalChart = this._createChart.createChart(data, networthTotalContext, "networthTotal");
    })
  }


  

  

}
