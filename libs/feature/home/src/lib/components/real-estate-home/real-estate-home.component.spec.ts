import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateHomeComponent } from './real-estate-home.component';

describe('RealEstateHomeComponent', () => {
  let component: RealEstateHomeComponent;
  let fixture: ComponentFixture<RealEstateHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
