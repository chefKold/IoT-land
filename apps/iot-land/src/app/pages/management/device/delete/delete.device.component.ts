import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DeviceService } from "../../../../services/device.service";

@Component({
  selector: "iot-land-delete-device",
  templateUrl: "./delete.device.component.html",
  styleUrls: ["./delete.device.component.css"],
})
export class DeleteDeviceComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private deviceService: DeviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    if (routeParams.has("deviceId")) {
      const deviceIdFromRoute = Number(routeParams.get("deviceId"));
      const device = this.deviceService.getDeviceById(deviceIdFromRoute);
      if (device) {
        this.deviceService.removeDevice(device);
      }
      this.router.navigate(["/devices"]);
    }
  }
}
