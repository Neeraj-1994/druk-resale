import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualDescriptionComponent } from './visual-description.component';

describe('VisualDescriptionComponent', () => {
  let component: VisualDescriptionComponent;
  let fixture: ComponentFixture<VisualDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
