import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Device } from "@iot-land/data-access";
import { DeviceService } from "../../../../services/device.service";

@Component({
  selector: "iot-land-edit",
  templateUrl: "./edit.device.component.html",
  styleUrls: ["./edit.device.component.css"],
})
export class EditDeviceComponent implements OnInit {
  // Class initialization to wait for onInit
  device: Device | undefined;

  constructor(
    private deviceService: DeviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    if (routeParams.has("deviceId")) {
      const deviceIdFromRoute = Number(routeParams.get("deviceId"));
      this.device = this.deviceService.getDeviceById(deviceIdFromRoute);
    }
  }

  editDevice(device: Device) {
    this.deviceService.updateDevice(device);
    this.router.navigate(["/devices"]);
  }
}
