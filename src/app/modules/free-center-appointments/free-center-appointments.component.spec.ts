import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCenterAppointmentsComponent } from './free-center-appointments.component';

describe('FreeCenterAppointmentsComponent', () => {
  let component: FreeCenterAppointmentsComponent;
  let fixture: ComponentFixture<FreeCenterAppointmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeCenterAppointmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeCenterAppointmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
