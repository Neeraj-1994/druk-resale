import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePostComponent } from './vehicle-post.component';

describe('VehiclePostComponent', () => {
  let component: VehiclePostComponent;
  let fixture: ComponentFixture<VehiclePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
