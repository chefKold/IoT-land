import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Facility } from "@iot-land/data-access";
import { FacilityService } from "../../../../services/facility.service";

@Component({
  selector: "iot-land-facility-details",
  templateUrl: "./details.facility.component.html",
  styleUrls: ["./details.facility.component.css"],
})
export class FacilityDetailsComponent implements OnInit {
  facility: Facility | undefined;

  constructor(
    private route: ActivatedRoute,
    private facilityService: FacilityService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    if (routeParams.has("facilityId")) {
      const facilityIdFromRoute = Number(routeParams.get("facilityId"));
      this.facility = this.facilityService.getFacilityById(facilityIdFromRoute);
    }
  }
}
