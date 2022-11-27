import { Injectable } from "@angular/core";
import { Address, Facility } from "@iot-land/data-access";

@Injectable({
  providedIn: "root",
})
export class FacilityService {
  storage: Facility[] = [];

  constructor() {
    this.seedData();
  }

  addFacility(Facility: Facility): void {
    this.storage.push(Facility);
  }

  getFacilities(): Facility[] {
    return this.storage;
  }

  getFacilityById(id: number): Facility | undefined {
    return this.storage.find((d) => d.id === id);
  }

  removeFacility(Facility: Facility): void {
    this.storage = this.storage.filter((d) => d.id !== Facility.id);
  }

  updateFacility(Facility: Facility): void {
    this.storage[(Facility.id ?? -1) - 1] = Facility;
  }

  generateSurrogateId(): number {
    return this.storage.length + 1;
  }

  private seedData(): void {
    this.storage.push(
      new Facility(
        1,
        "Gebouw 'T Koekje",
        "Een mooi gebouw",
        new Address("Werkstraat", 1, "Amsterdam")
      )
    );
  }
}
