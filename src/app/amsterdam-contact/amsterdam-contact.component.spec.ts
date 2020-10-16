import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmsterdamContactComponent } from './amsterdam-contact.component';

describe('AmsterdamContactComponent', () => {
  let component: AmsterdamContactComponent;
  let fixture: ComponentFixture<AmsterdamContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmsterdamContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmsterdamContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
