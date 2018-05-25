import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class KingdomApiService {

  constructor() { }
  

  getData(): Observable<any> {
    let data = {
      temp_max: [100,200,300, 100, 300, 500, 600, 700, 1500],
      temp_min: [500,600,1000, 1100, 1300, 1350, 1400, 1500, 1200],
      weatherDates:['feb1', 'feb2', 'feb3', 'feb4', 'feb5', 'feb6', 'feb7', 'feb8', 'feb9' ],
    }

    return Observable.of(data);
  }
}




   