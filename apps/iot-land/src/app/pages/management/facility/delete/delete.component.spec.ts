import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DeleteFacilityComponent } from "./delete.component";

describe("DeleteComponent", () => {
  let component: DeleteFacilityComponent;
  let fixture: ComponentFixture<DeleteFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteFacilityComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
