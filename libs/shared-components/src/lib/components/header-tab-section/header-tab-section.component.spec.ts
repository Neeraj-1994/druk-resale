import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTabSectionComponent } from './header-tab-section.component';

describe('HeaderTabSectionComponent', () => {
  let component: HeaderTabSectionComponent;
  let fixture: ComponentFixture<HeaderTabSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderTabSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTabSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
