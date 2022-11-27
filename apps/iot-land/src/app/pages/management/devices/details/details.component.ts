import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Device } from "@iot-land/data-access";
import { DeviceService } from "apps/iot-land/src/app/services/device.service";

@Component({
  selector: "iot-land-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent implements OnInit {
  device: Device | undefined;

  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    if (routeParams.has("deviceId")) {
      const deviceIdFromRoute = Number(routeParams.get("deviceId"));
      this.device = this.deviceService.getDeviceById(deviceIdFromRoute);
    }
  }
}
