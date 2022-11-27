import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Device } from "@iot-land/data-access";
import { DeviceService } from "../../../services/device.service";

@Component({
  selector: "iot-land-device-form",
  templateUrl: "./device.form.component.html",
  styleUrls: ["./device.form.component.css"],
})
export class DeviceFormComponent implements OnInit {
  form!: FormGroup;
  @Input() device: Device = new Device(0, "", "", new Date(), false, 0, "");
  @Output() deviceFormSubmit = new EventEmitter<Device>();

  constructor(private deviceService: DeviceService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.device.name, [Validators.required]),
      description: new FormControl(this.device.description, [
        Validators.required,
      ]),
      installationDate: new FormControl(this.device.installationDate, [
        Validators.required,
      ]),
      inMaintenance: new FormControl(this.device.inMaintenance, [
        Validators.required,
      ]),
      mhz: new FormControl(this.device.mhz, [Validators.required]),
      networkAddress: new FormControl(this.device.networkAddress, [
        Validators.required,
      ]),
    });
  }

  onSubmit() {
    const device = new Device(
      this.deviceService.generateSurrogateId(),
      this.form.value.name,
      this.form.value.description,
      new Date(this.form.value.installationDate),
      this.form.value.inMaintenance,
      this.form.value.mhz,
      this.form.value.networkAddress
    );

    this.deviceFormSubmit.emit(device);
  }
}
