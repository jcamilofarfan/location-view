import { Component, OnInit } from '@angular/core';

import { ParentLocation } from '../../location/models/parent-location';

import { ParentLocationService } from '../../location/services/parent-location.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations: ParentLocation[] = [];

  constructor(
    private parentLocationService: ParentLocationService
  ) { }

  ngOnInit(): void {
    this.parentLocationService.get()
      .subscribe(data =>{
        console.log('data',data);
        this.locations = data;
      });
  }

  createNewLocation(){
    
  }

}
