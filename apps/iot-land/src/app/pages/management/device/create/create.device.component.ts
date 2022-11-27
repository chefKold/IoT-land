import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Device } from "@iot-land/data-access";
import { DeviceService } from "../../../../services/device.service";

@Component({
  selector: "iot-land-create-device",
  templateUrl: "./create.device.component.html",
  styleUrls: ["./create.device.component.css"],
})
export class CreateDeviceComponent {
  // Blank device
  device: Device = new Device(0, "", "", new Date(), false, 0, "");

  constructor(private deviceService: DeviceService, private router: Router) {}

  createDevice(device: Device) {
    this.deviceService.addDevice(device);
    this.router.navigate(["/devices"]);
  }
}
