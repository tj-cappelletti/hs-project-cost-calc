import { Component, OnInit } from '@angular/core';
import { ConfigurationService } from '../shared/configuration.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  private _configurationService: ConfigurationService;

  // TODO: Pull from login context
  locationName: string = "";

  constructor(private configurationService: ConfigurationService) {
    this._configurationService = configurationService;
  }

  ngOnInit(): void {
    this.locationName = this._configurationService.locationName;
  }

}
