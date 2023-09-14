import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FaPageComponent } from "./fa-page.component";

describe("FaPageComponent", () => {
  let component: FaPageComponent;
  let fixture: ComponentFixture<FaPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FaPageComponent],
    });
    fixture = TestBed.createComponent(FaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
