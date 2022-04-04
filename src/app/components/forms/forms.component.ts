import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { ParentLocationService } from "../../location/services/parent-location.service";
import { ChildLocationService } from "../../location/services/child-location.service";

import { ParentLocation } from 'src/app/location/models/parent-location';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  locationReg: any = {
    name: '',
    area: 0,
  }

  @Input() locations: ParentLocation[] = [{
    id: 1,
    name: 'A',
    area: 1,
    locationChildren: []
  }];

  constructor(
    private parentLocationService: ParentLocationService,
    private childLocationService: ChildLocationService
  ) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit() {
    if (this.locationReg.isActive == true) {
      const locationChild = {
        name: this.locationReg.name,
        area: this.locationReg.area,
        parentId: parseInt(this.locationReg.parentId)
      }
      this.childLocationService.create(locationChild)
        .subscribe(data => {
          this.resetForm();
          // reload page
          location.reload();
        });
    } else {
      const locationParent = {
        name: this.locationReg.name,
        area: this.locationReg.area,
      }
      this.parentLocationService.create(locationParent)
        .subscribe(data => {
          this.resetForm();
          // reload page
          location.reload();
        });
    }
  }

  //reset form
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.locationReg = {
      name: '',
      area: 0,
      isActive: false,
      parentLocation: null
    }
  }

}
