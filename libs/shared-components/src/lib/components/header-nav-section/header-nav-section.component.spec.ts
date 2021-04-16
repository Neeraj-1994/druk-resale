import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderNavSectionComponent } from './header-nav-section.component';

describe('HeaderNavSectionComponent', () => {
  let component: HeaderNavSectionComponent;
  let fixture: ComponentFixture<HeaderNavSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderNavSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
