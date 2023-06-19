import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppointmentByUserComponent } from './add-appointment-by-user.component';

describe('AddAppointmentByUserComponent', () => {
  let component: AddAppointmentByUserComponent;
  let fixture: ComponentFixture<AddAppointmentByUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAppointmentByUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAppointmentByUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
