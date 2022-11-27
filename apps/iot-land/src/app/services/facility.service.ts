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
        "IoT-Land HQ",
        "Op het HQ kun je van alles doen, maar tegelijkertijd ook niet. Het is een beetje een raar gebouw. Maar het is wel een gebouw. En dat is al heel wat. Kan er nog meer over worden gezegd behalve dat het een gebouw is? Volgens mij niet, het is namelijk een gebouw. En dat is het.",
        new Address("Lovensdijkstraat", 1, "Breda")
      ),
      new Facility(
        2,
        "IoT-Land administratie",
        "Bij de administratie kun je ook van alles doen, alleen iets minder dan op het HQ. Het is een beetje een raar gebouw. Maar het is wel een gebouw. En dat is al heel wat. Kan er nog meer over worden gezegd behalve dat het een gebouw is? Volgens mij niet, het is namelijk een gebouw. En dat is het.",
        new Address("Lovensdijkstraat", 2, "Breda")
      ),
      new Facility(
        3,
        "R&D gebouw A",
        "In gebouw A kun je van alles doen, maar dan ook echt alles. Er gelden geen regels zoals in de echte wereld. Het is een beetje een raar gebouw. Maar het is wel een gebouw. En dat is al heel wat. Kan er nog meer over worden gezegd behalve dat het een gebouw is? Volgens mij niet, het is namelijk een gebouw. En dat is het.",
        new Address("Lovensdijkstraat", 3, "Breda")
      ),
      new Facility(
        4,
        "R&D gebouw B",
        "In gebouw B kun je van alles doen, maar dan ook echt alles. Er gelden geen regels zoals in de echte wereld. Het is een beetje een raar gebouw. Maar het is wel een gebouw. En dat is al heel wat. Kan er nog meer over worden gezegd behalve dat het een gebouw is? Volgens mij niet, het is namelijk een gebouw. En dat is het.",
        new Address("Lovensdijkstraat", 4, "Breda")
      ),
      new Facility(
        5,
        "R&D gebouw C",
        "In gebouw C kun je van alles doen, maar dan ook echt alles. Er gelden geen regels zoals in de echte wereld. Het is een beetje een raar gebouw. Maar het is wel een gebouw. En dat is al heel wat. Kan er nog meer over worden gezegd behalve dat het een gebouw is? Volgens mij niet, het is namelijk een gebouw. En dat is het.",
        new Address("Lovensdijkstraat", 4, "Breda")
      )
    );
  }
}
