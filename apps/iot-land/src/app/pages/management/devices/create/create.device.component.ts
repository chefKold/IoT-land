import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { Device } from "@iot-land/data-access";
import { DeviceService } from "apps/iot-land/src/app/services/device.service";

@Component({
  selector: "iot-land-create-device",
  templateUrl: "./create.device.component.html",
  styleUrls: ["./create.device.component.css"],
})
export class CreateDeviceComponent implements OnInit {
  form!: FormGroup;

  constructor(private devicesService: DeviceService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      installationDate: new FormControl(null, [Validators.required]),
      inMaintenance: new FormControl(null, [Validators.required]),
      mhz: new FormControl(null, [Validators.required]),
      networkAddress: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    const device = new Device(
      this.devicesService.generateSurrogateId(),
      this.form.value.name,
      this.form.value.description,
      new Date(this.form.value.installationDate),
      this.form.value.inMaintenance,
      this.form.value.mhz,
      this.form.value.networkAddress
    );

    this.devicesService.addDevice(device);
    this.router.navigate(["/devices"]);
  }
}
