import { Injectable } from '@angular/core';
import storage_key from "../constants/storage_key";

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  public getApiEndpoint(): string {
    return localStorage.getItem(storage_key.API_URL) || 'http://localhost:7861';
  }
}
