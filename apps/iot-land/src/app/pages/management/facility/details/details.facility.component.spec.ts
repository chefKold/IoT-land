import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FacilityDetailsComponent } from "./details.facility.component";

describe("DetailsComponent", () => {
  let component: FacilityDetailsComponent;
  let fixture: ComponentFixture<FacilityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacilityDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FacilityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
