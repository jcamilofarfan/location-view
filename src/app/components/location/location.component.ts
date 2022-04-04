import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ParentLocation } from 'src/app/location/models/parent-location';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {

  @Input() location: ParentLocation = {
    id: 1,
    name: 'A',
    area: 1,
    locationChildren: []
  };

  @Output() addLocation = new EventEmitter<ParentLocation>();

  constructor() { }

  viewLocation(){
    this.addLocation.emit(this.location);
  }



}
