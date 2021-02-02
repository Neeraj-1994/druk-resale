import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularTabSectionComponent } from './popular-tab-section.component';

describe('PopularTabSectionComponent', () => {
  let component: PopularTabSectionComponent;
  let fixture: ComponentFixture<PopularTabSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularTabSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularTabSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
