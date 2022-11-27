import { Component, OnInit } from "@angular/core";

import { Facility } from "@iot-land/data-access";
import { FacilityService } from "../../../services/facility.service";

@Component({
  selector: "iot-land-facilities",
  templateUrl: "./facility.component.html",
  styleUrls: ["./facility.component.css"],
})
export class FacilityComponent implements OnInit {
  facilities: Facility[] = [];

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.facilities = this.facilityService.getFacilities();
  }
}
