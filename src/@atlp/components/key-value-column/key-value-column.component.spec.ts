import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueColumnComponent } from './key-value-column.component';

describe('KeyValueColumnComponent', () => {
  let component: KeyValueColumnComponent;
  let fixture: ComponentFixture<KeyValueColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyValueColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyValueColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
