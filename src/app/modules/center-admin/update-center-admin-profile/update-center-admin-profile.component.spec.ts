import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCenterAdminProfileComponent } from './update-center-admin-profile.component';

describe('UpdateCenterAdminProfileComponent', () => {
  let component: UpdateCenterAdminProfileComponent;
  let fixture: ComponentFixture<UpdateCenterAdminProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCenterAdminProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCenterAdminProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
