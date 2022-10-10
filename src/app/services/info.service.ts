import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SettingsService} from "./settings.service";
import {SDInfoModel} from "../models/SDInfoModel";
import {StateModel} from "../models/StateModel";

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor(private http: HttpClient,
              private settings: SettingsService) { }

  public getStableDiffusionModelInfo(): Observable<SDInfoModel.RootObject> {
    return this.http.get<SDInfoModel.RootObject>(this.settings.getApiEndpoint() + '/v1/stable_diffusion');
  }

  public getState(): Observable<StateModel.RootObject> {
    return this.http.get<StateModel.RootObject>(this.settings.getApiEndpoint() + '/v1/state');
  }
}
