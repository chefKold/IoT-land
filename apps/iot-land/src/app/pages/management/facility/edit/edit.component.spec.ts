import { ComponentFixture, TestBed } from "@angular/core/testing";

import { EditFacilityComponent } from "./edit.component";

describe("EditComponent", () => {
  let component: EditFacilityComponent;
  let fixture: ComponentFixture<EditFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditFacilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
