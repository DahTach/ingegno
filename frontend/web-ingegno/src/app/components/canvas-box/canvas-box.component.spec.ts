import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBoxComponent } from './canvas-box.component';

describe('CanvasBoxComponent', () => {
  let component: CanvasBoxComponent;
  let fixture: ComponentFixture<CanvasBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanvasBoxComponent]
    });
    fixture = TestBed.createComponent(CanvasBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
