import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Address, Facility } from "@iot-land/data-access";
import { FacilityService } from "../../../../services/facility.service";

@Component({
  selector: "iot-land-create-facility",
  templateUrl: "./create.facility.component.html",
  styleUrls: ["./create.facility.component.css"],
})
export class CreateFacilityComponent {
  // Blank facility
  facility: Facility = new Facility(null, "", "", new Address("", 0, ""));

  constructor(
    private facilityService: FacilityService,
    private router: Router
  ) {}

  createFacility(facility: Facility) {
    this.facilityService.addFacility(facility);
    this.router.navigate(["/facilities"]);
  }
}
