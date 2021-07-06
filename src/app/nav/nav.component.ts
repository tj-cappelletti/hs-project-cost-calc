import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit {
  // TODO: Pull from login context
  locationName: string = "Hammer & Stain Pottstown"
  constructor() { }

  ngOnInit(): void {
  }

}
