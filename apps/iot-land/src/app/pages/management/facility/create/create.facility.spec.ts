import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { CreateFacilityComponent } from "./create.facility.component";

describe("CreateComponent", () => {
  let component: CreateFacilityComponent;
  let fixture: ComponentFixture<CreateFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateFacilityComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
