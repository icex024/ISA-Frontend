import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCentersPageComponent } from './show-centers-page.component';

describe('ShowCentersPageComponent', () => {
  let component: ShowCentersPageComponent;
  let fixture: ComponentFixture<ShowCentersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCentersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCentersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
