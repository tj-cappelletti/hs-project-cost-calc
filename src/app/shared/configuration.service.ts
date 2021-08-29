import { Injectable } from '@angular/core';
import { IConfiguration } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private _config: IConfiguration;

  constructor() {
    this._config = { "locationName": "Pottstown, PA" }
  }

  get locationName() {
    return this._config.locationName;
  }
}
