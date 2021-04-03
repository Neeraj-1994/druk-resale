import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEditableDetailsComponent } from './basic-editable-details.component';

describe('BasicEditableDetailsComponent', () => {
  let component: BasicEditableDetailsComponent;
  let fixture: ComponentFixture<BasicEditableDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicEditableDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEditableDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
