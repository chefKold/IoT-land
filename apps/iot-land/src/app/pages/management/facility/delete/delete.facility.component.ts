import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FacilityService } from "../../../../services/facility.service";

@Component({
  selector: "iot-land-delete-facility",
  templateUrl: "./delete.facility.component.html",
  styleUrls: ["./delete.facility.component.css"],
})
export class DeleteFacilityComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private facilityService: FacilityService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    if (routeParams.has("facilityId")) {
      const facilityIdFromRoute = Number(routeParams.get("facilityId"));
      const facility =
        this.facilityService.getFacilityById(facilityIdFromRoute);
      if (facility) {
        this.facilityService.removeFacility(facility);
      }
      this.router.navigate(["/facilities"]);
    }
  }
}
