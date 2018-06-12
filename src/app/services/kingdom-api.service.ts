import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpRequest } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class KingdomApiService {
  constructor(private _http: HttpClient) {}

  getData() {
    
    return this._http.get("https://timbrady.net/data.txt").map((result) => {
      console.log('kingdom-api inside map', result);
      return result;
    });
  }
}
