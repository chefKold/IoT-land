import { Component, OnInit } from "@angular/core";
import { Device } from "@iot-land/data-access";
import { DeviceService } from "../../../services/device.service";
@Component({
  selector: "iot-land-devices",
  templateUrl: "./devices.component.html",
  styleUrls: ["./devices.component.css"],
})
export class DevicesComponent implements OnInit {
  devices: Device[] = [];
  constructor(private devicesService: DeviceService) {}

  ngOnInit(): void {
    this.devices = this.devicesService.getDevices();
  }
}
