import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SettingsService} from "./settings.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OperationService {

  constructor(private http:HttpClient, private setting: SettingsService) { }

  public interruptJob(): Observable<string> {
    return this.http.post<string>(this.setting.getApiEndpoint() + '/v1/op/interrupt', null);
  };

  public skipJob(): Observable<string> {
    return this.http.post<string>(this.setting.getApiEndpoint() + '/v1/op/skip', null);
  }
}
