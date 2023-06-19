import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageCenterAdminComponent } from './home-page-center-admin.component';

describe('HomePageCenterAdminComponent', () => {
  let component: HomePageCenterAdminComponent;
  let fixture: ComponentFixture<HomePageCenterAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageCenterAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageCenterAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
