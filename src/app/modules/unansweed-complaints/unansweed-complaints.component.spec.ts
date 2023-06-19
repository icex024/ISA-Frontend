import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnansweedComplaintsComponent } from './unansweed-complaints.component';

describe('UnansweedComplaintsComponent', () => {
  let component: UnansweedComplaintsComponent;
  let fixture: ComponentFixture<UnansweedComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnansweedComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnansweedComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
