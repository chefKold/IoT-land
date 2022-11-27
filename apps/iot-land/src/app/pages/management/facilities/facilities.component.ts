import { Component, OnInit } from "@angular/core";

import { Facility, Address } from "@iot-land/data-access";
import { FacilityService } from "../../../services/facility.service";

@Component({
  selector: "iot-land-facilities",
  templateUrl: "./facilities.component.html",
  styleUrls: ["./facilities.component.css"],
})
export class FacilityComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.facilities = this.facilityService.getFacilities();
  }
}
