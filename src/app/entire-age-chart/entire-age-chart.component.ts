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

  constructor(
    private _kingdomAPI: KingdomApiService,
    private elementRef: ElementRef,
  ) {}


  //5 charts at the beginning and ng show and hide based on the button click
  ngOnInit() {
    
  }

  ngOnChanges() {
    
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      let ctx = this.elementRef.nativeElement.querySelector(`#canvas`);
      this.createChart(ctx);
    })
  }

  changeChartData(string){
  }

  createChart(ctx) {
    this._kingdomAPI.getData().subscribe((data) => {
      const ageData = data['age'];
      const landAverage = ageData['landAverage'];
      
      // const landTotal = ageData['landTotal'];
      // const networthAverage = ageData['networthAverage'];
      // const networthTotal = ageData['networthTotal'];
      // const honorTotal = ageData['honorTotal'];

      const currentDate = ageData['currentDate'];

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
