import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiscDataComponent } from './misc-data.component';

describe('MiscDataComponent', () => {
  let component: MiscDataComponent;
  let fixture: ComponentFixture<MiscDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiscDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiscDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
