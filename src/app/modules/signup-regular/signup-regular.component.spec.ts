import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRegularComponent } from './signup-regular.component';

describe('SignupRegularComponent', () => {
  let component: SignupRegularComponent;
  let fixture: ComponentFixture<SignupRegularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupRegularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupRegularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
