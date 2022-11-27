import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { EditFacilityComponent } from "./edit.facility.component";

describe("EditComponent", () => {
  let component: EditFacilityComponent;
  let fixture: ComponentFixture<EditFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditFacilityComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(EditFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
