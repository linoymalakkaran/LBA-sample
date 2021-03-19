import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentFileComponent } from './appointment-file.component';

describe('AppointmentFileComponent', () => {
  let component: AppointmentFileComponent;
  let fixture: ComponentFixture<AppointmentFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
