import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicDetailsEditedComponent } from './basic-details-edited.component';

describe('BasicDetailsEditedComponent', () => {
  let component: BasicDetailsEditedComponent;
  let fixture: ComponentFixture<BasicDetailsEditedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicDetailsEditedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicDetailsEditedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
