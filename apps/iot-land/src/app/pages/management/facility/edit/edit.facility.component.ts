import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Facility } from "@iot-land/data-access";
import { FacilityService } from "../../../../services/facility.service";

@Component({
  selector: "iot-land-edit-facility",
  templateUrl: "./edit.facility.component.html",
  styleUrls: ["./edit.facility.component.css"],
})
export class EditFacilityComponent implements OnInit {
  // Class initialization to wait for onInit
  facility: Facility | undefined;

  constructor(
    private FacilityService: FacilityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    if (routeParams.has("facilityId")) {
      const FacilityIdFromRoute = Number(routeParams.get("facilityId"));
      this.facility = this.FacilityService.getFacilityById(FacilityIdFromRoute);
    }
  }

  editFacility(facility: Facility) {
    this.FacilityService.updateFacility(facility);
    this.router.navigate(["/facilities"]);
  }
}
