import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Address, Facility } from "@iot-land/data-access";
import { FacilityService } from "../../../services/facility.service";

@Component({
  selector: "iot-land-facility-form",
  templateUrl: "./facility.form.component.html",
  styleUrls: ["./facility.form.component.css"],
})
export class FacilityFormComponent implements OnInit {
  form!: FormGroup;
  @Input() facility: Facility = new Facility(
    null,
    "",
    "",
    new Address("", 0, "")
  );
  @Output() facilityFormSubmit = new EventEmitter<Facility>();

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(this.facility.name, [Validators.required]),
      description: new FormControl(this.facility.description, [
        Validators.required,
      ]),
      street: new FormControl(this.facility.address?.street, [
        Validators.required,
      ]),
      houseNumber: new FormControl(this.facility.address?.houseNumber, [
        Validators.required,
      ]),
      city: new FormControl(this.facility.address?.city, [Validators.required]),
    });
  }

  onSubmit() {
    const facility: Facility = new Facility(
      this.facility.id ?? this.facilityService.generateSurrogateId(),
      this.form.value.name,
      this.form.value.description,
      new Address(
        this.form.value.street,
        this.form.value.houseNumber,
        this.form.value.city
      )
    );

    this.facilityFormSubmit.emit(facility);
  }
}
