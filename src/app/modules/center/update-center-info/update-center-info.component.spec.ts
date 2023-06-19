import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCenterInfoComponent } from './update-center-info.component';

describe('UpdateCenterInfoComponent', () => {
  let component: UpdateCenterInfoComponent;
  let fixture: ComponentFixture<UpdateCenterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCenterInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCenterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
