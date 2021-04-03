import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstatePostComponent } from './real-estate-post.component';

describe('RealEstatePostComponent', () => {
  let component: RealEstatePostComponent;
  let fixture: ComponentFixture<RealEstatePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstatePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealEstatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
