import { ComponentFixture, TestBed } from "@angular/core/testing";

import { RmBioComponent } from "./rm-bio.component";

describe("RmBioComponent", () => {
  let component: RmBioComponent;
  let fixture: ComponentFixture<RmBioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RmBioComponent],
    });
    fixture = TestBed.createComponent(RmBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
