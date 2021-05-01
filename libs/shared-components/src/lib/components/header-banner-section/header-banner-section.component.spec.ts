import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBannerSectionComponent } from './header-banner-section.component';

describe('HeaderBannerSectionComponent', () => {
  let component: HeaderBannerSectionComponent;
  let fixture: ComponentFixture<HeaderBannerSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderBannerSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderBannerSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
