import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class KingdomApiService {
  constructor(private _http: HttpClient) {}

  getData() {
    
    return this._http.get("https://timbrady.net/data.txt").map((result) => {
      return result;
    });
  }
}
