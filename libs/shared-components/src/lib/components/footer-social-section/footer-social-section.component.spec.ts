import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialSectionComponent } from './footer-social-section.component';

describe('FooterSocialSectionComponent', () => {
  let component: FooterSocialSectionComponent;
  let fixture: ComponentFixture<FooterSocialSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSocialSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSocialSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
