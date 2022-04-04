import { Component } from '@angular/core';

import { ParentLocation } from "./location/models/parent-location";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}
  title = 'location-view';
}
